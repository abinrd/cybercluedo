import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

interface CyberCluedoScoresEmailProps {
  players: string;
  score: string;
}

export default function CyberCluedoScoresEmail({
  players,
  score,
}: CyberCluedoScoresEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Cyber Cluedo Tournament Results</Preview>

      <Section
        style={{
          backgroundColor: "#0b1120",
          padding: "40px 0",
          fontFamily: "Arial, sans-serif",
          color: "#ffffff",
        }}
      >
        <Section style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Text
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#38bdf8",
              marginBottom: "4px",
            }}
          >
            CYBER CLUEDO
          </Text>
          <Text
            style={{
              fontSize: "14px",
              textAlign: "center",
              letterSpacing: "1px",
              color: "#a5f3fc",
              marginBottom: "24px",
            }}
          >
            TOURNAMENT RESULTS
          </Text>

          {/* Card */}
          <Section
            style={{
              backgroundColor: "#1e293b",
              padding: "24px",
              borderRadius: "8px",
            }}
          >
            <Text
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#ffffff",
                textAlign: "center",
                marginBottom: "8px",
              }}
            >
              RESULTS
            </Text>
            <Text
              style={{
                fontSize: "16px",
                textAlign: "center",
                color: "#67e8f9",
                marginBottom: "20px",
              }}
            >
              Cyber Cluedo
            </Text>

            {/* Date & Location */}
            <Section style={{ textAlign: "center", marginBottom: "24px" }}>
              <Text style={{ margin: "4px 0", color: "#bae6fd" }}>
                <strong>Date:</strong> 20/09/2025
              </Text>
              <Text style={{ margin: "4px 0", color: "#bae6fd" }}>
                <strong>Location:</strong> SJCET
              </Text>
            </Section>

            {/* Top Suspect */}
            <Section
              style={{
                backgroundColor: "#0ea5e9",
                padding: "16px",
                borderRadius: "6px",
              }}
            >
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "#ffffff",
                }}
              >
                Top Suspect
              </Text>

              <Text style={{ fontSize: "16px", color: "#ffffff" }}>
                {players}
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "4px",
                  color: "#ffffff",
                }}
              >
                {score} points
              </Text>
            </Section>
          </Section>

          <Text
            style={{
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "12px",
              marginTop: "24px",
            }}
          >
            © 2025 Cyber Cluedo • All rights reserved
          </Text>
        </Section>
      </Section>
    </Html>
  );
}
