-- supabase/migrations/20250919_team_triggers.sql

CREATE OR REPLACE FUNCTION enforce_max_three_team_members()
RETURNS TRIGGER AS $$
BEGIN
  IF (TG_OP = 'INSERT') THEN
    IF (SELECT COUNT(*) FROM team_members WHERE team_id = NEW.team_id) >= 3 THEN
      RAISE EXCEPTION 'Team % already has 3 members', NEW.team_id USING ERRCODE = '23514';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS team_members_limit ON team_members;
CREATE TRIGGER team_members_limit
BEFORE INSERT ON team_members
FOR EACH ROW
EXECUTE FUNCTION enforce_max_three_team_members();

CREATE OR REPLACE FUNCTION ensure_team_has_three_on_event()
RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT COUNT(*) FROM team_members WHERE team_id = NEW.team_id) != 3 THEN
    RAISE EXCEPTION 'Team must have exactly 3 members to create or update events' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS events_team_size_check ON events;
CREATE TRIGGER events_team_size_check
BEFORE INSERT OR UPDATE ON events
FOR EACH ROW
EXECUTE FUNCTION ensure_team_has_three_on_event();
