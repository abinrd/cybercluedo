-- Max 4 members per team (including owner)
CREATE OR REPLACE FUNCTION enforce_max_four_team_members()
RETURNS TRIGGER AS $$
BEGIN
  IF (TG_OP = 'INSERT') THEN
    IF (SELECT COUNT(*) FROM team_members WHERE team_id = NEW.team_id) >= 4 THEN
      RAISE EXCEPTION 'Team % already has 4 members', NEW.team_id USING ERRCODE = '23514';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS team_members_limit ON team_members;
CREATE TRIGGER team_members_limit
BEFORE INSERT ON team_members
FOR EACH ROW
EXECUTE FUNCTION enforce_max_four_team_members();

-- Optional: allow events only when team size is 1..4
CREATE OR REPLACE FUNCTION ensure_team_has_one_to_four_on_event()
RETURNS TRIGGER AS $$
DECLARE
  cnt INTEGER;
BEGIN
  SELECT COUNT(*) INTO cnt FROM team_members WHERE team_id = NEW.team_id;
  IF cnt < 1 OR cnt > 4 THEN
    RAISE EXCEPTION 'Team must have 1-4 members to create or update events' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS events_team_size_check ON events;
CREATE TRIGGER events_team_size_check
BEFORE INSERT OR UPDATE ON events
FOR EACH ROW
EXECUTE FUNCTION ensure_team_has_one_to_four_on_event();
