"use client"

import { H1, H2, P } from "@/components/typography"

export const DetailedData = {
  employee_list: (
  <div className="space-y-4">
    <H1>Employee List – View Personnel</H1>
    

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-white/20 text-sm">
        <thead className="bg-white/10 text-left">
          <tr>
            <th className="px-4 py-2">EmpID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Work PC IP</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          <tr>
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Sarah Mitchell</td>
            <td className="px-4 py-2">CEO</td>
            <td className="px-4 py-2">Executive</td>
            <td className="px-4 py-2">192.168.1.10</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2</td>
            <td className="px-4 py-2">James Rodriguez</td>
            <td className="px-4 py-2">CTO</td>
            <td className="px-4 py-2">Technology</td>
            <td className="px-4 py-2">192.168.1.11</td>
          </tr>
          <tr>
            <td className="px-4 py-2">3</td>
            <td className="px-4 py-2">Emily Chen</td>
            <td className="px-4 py-2">Lead Developer</td>
            <td className="px-4 py-2">Engineering</td>
            <td className="px-4 py-2">192.168.1.12</td>
          </tr>
          <tr>
            <td className="px-4 py-2">4</td>
            <td className="px-4 py-2">Michael Johnson</td>
            <td className="px-4 py-2">Security Analyst</td>
            <td className="px-4 py-2">IT Security</td>
            <td className="px-4 py-2">192.168.1.13</td>
          </tr>
          <tr>
            <td className="px-4 py-2">5</td>
            <td className="px-4 py-2">Lisa Wang</td>
            <td className="px-4 py-2">Project Manager</td>
            <td className="px-4 py-2">Engineering</td>
            <td className="px-4 py-2">192.168.1.14</td>
          </tr>
          <tr>
            <td className="px-4 py-2">6</td>
            <td className="px-4 py-2">David Brown</td>
            <td className="px-4 py-2">Systems Admin</td>
            <td className="px-4 py-2">IT Operations</td>
            <td className="px-4 py-2">192.168.1.15</td>
          </tr>
          <tr>
            <td className="px-4 py-2">7</td>
            <td className="px-4 py-2">Jennifer Taylor</td>
            <td className="px-4 py-2">Senior Developer</td>
            <td className="px-4 py-2">Engineering</td>
            <td className="px-4 py-2">192.168.1.45</td>
          </tr>
          <tr>
            <td className="px-4 py-2">8</td>
            <td className="px-4 py-2">Robert Davis</td>
            <td className="px-4 py-2">HR Manager</td>
            <td className="px-4 py-2">Human Resources</td>
            <td className="px-4 py-2">192.168.1.16</td>
          </tr>
          <tr>
            <td className="px-4 py-2">9</td>
            <td className="px-4 py-2">Amanda Wilson</td>
            <td className="px-4 py-2">Marketing Director</td>
            <td className="px-4 py-2">Marketing</td>
            <td className="px-4 py-2">192.168.1.17</td>
          </tr>
          <tr>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">Christopher Lee</td>
            <td className="px-4 py-2">DevOps Engineer</td>
            <td className="px-4 py-2">Engineering</td>
            <td className="px-4 py-2">192.168.1.18</td>
          </tr>
          <tr>
            <td className="px-4 py-2">11</td>
            <td className="px-4 py-2">Maria Garcia</td>
            <td className="px-4 py-2">Financial Analyst</td>
            <td className="px-4 py-2">Finance</td>
            <td className="px-4 py-2">192.168.1.19</td>
          </tr>
          <tr>
            <td className="px-4 py-2">12</td>
            <td className="px-4 py-2">Kevin Thompson</td>
            <td className="px-4 py-2">Quality Assurance</td>
            <td className="px-4 py-2">Engineering</td>
            <td className="px-4 py-2">192.168.1.20</td>
          </tr>
          <tr>
            <td className="px-4 py-2">13</td>
            <td className="px-4 py-2">Rachel Green</td>
            <td className="px-4 py-2">UI/UX Designer</td>
            <td className="px-4 py-2">Design</td>
            <td className="px-4 py-2">192.168.1.21</td>
          </tr>
          <tr>
            <td className="px-4 py-2">14</td>
            <td className="px-4 py-2">Steven Clark</td>
            <td className="px-4 py-2">Database Admin</td>
            <td className="px-4 py-2">IT Operations</td>
            <td className="px-4 py-2">192.168.1.22</td>
          </tr>
          <tr>
            <td className="px-4 py-2">15</td>
            <td className="px-4 py-2">Nicole Lewis</td>
            <td className="px-4 py-2">Business Analyst</td>
            <td className="px-4 py-2">Operations</td>
            <td className="px-4 py-2">192.168.1.23</td>
          </tr>
          <tr>
            <td className="px-4 py-2">16</td>
            <td className="px-4 py-2">Jason Martinez</td>
            <td className="px-4 py-2">Network Engineer</td>
            <td className="px-4 py-2">IT Operations</td>
            <td className="px-4 py-2">192.168.1.24</td>
          </tr>
          <tr>
            <td className="px-4 py-2">17</td>
            <td className="px-4 py-2">Stephanie Hall</td>
            <td className="px-4 py-2">Content Writer</td>
            <td className="px-4 py-2">Marketing</td>
            <td className="px-4 py-2">192.168.1.25</td>
          </tr>
          <tr>
            <td className="px-4 py-2">18</td>
            <td className="px-4 py-2">Daniel Young</td>
            <td className="px-4 py-2">Software Architect</td>
            <td className="px-4 py-2">Engineering</td>
            <td className="px-4 py-2">192.168.1.26</td>
          </tr>
          <tr>
            <td className="px-4 py-2">19</td>
            <td className="px-4 py-2">Laura Anderson</td>
            <td className="px-4 py-2">Sales Manager</td>
            <td className="px-4 py-2">Sales</td>
            <td className="px-4 py-2">192.168.1.27</td>
          </tr>
          <tr>
            <td className="px-4 py-2">20</td>
            <td className="px-4 py-2">Paul Jackson</td>
            <td className="px-4 py-2">Technical Support</td>
            <td className="px-4 py-2">Customer Service</td>
            <td className="px-4 py-2">192.168.1.28</td>
          </tr>
          <tr>
            <td className="px-4 py-2">21</td>
            <td className="px-4 py-2">Melissa White</td>
            <td className="px-4 py-2">Legal Counsel</td>
            <td className="px-4 py-2">Legal</td>
            <td className="px-4 py-2">192.168.1.29</td>
          </tr>
          <tr>
            <td className="px-4 py-2">22</td>
            <td className="px-4 py-2">Anthony Harris</td>
            <td className="px-4 py-2">Research Scientist</td>
            <td className="px-4 py-2">R&D</td>
            <td className="px-4 py-2">192.168.1.30</td>
          </tr>
          <tr>
            <td className="px-4 py-2">23</td>
            <td className="px-4 py-2">Karen Miller</td>
            <td className="px-4 py-2">Office Manager</td>
            <td className="px-4 py-2">Administration</td>
            <td className="px-4 py-2">192.168.1.31</td>
          </tr>
          <tr>
            <td className="px-4 py-2">24</td>
            <td className="px-4 py-2">Ryan Moore</td>
            <td className="px-4 py-2">Junior Developer</td>
            <td className="px-4 py-2">Engineering</td>
            <td className="px-4 py-2">192.168.1.32</td>
          </tr>
          <tr>
            <td className="px-4 py-2">25</td>
            <td className="px-4 py-2">Samantha Turner</td>
            <td className="px-4 py-2">Accountant</td>
            <td className="px-4 py-2">Finance</td>
            <td className="px-4 py-2">192.168.1.33</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
),

  mission_brief: (
    <div className="space-y-6">
      <H1 className="uppercase tracking-wide">
        Operation Helix Breach – Cybersecurity Investigation
      </H1>

      <div className="space-y-1 text-sm text-white/70">
        <div>
          <span className="font-semibold text-white">Date:</span> September 9,
          2025
        </div>
        <div>
          <span className="font-semibold text-white">Company:</span> NovaTech
          Industries
        </div>
        <div>
          <span className="font-semibold text-white">Classification:</span>{" "}
          Confidential
        </div>
      </div>

      <div>
        <H2>Situation</H2>
        <P>
          NovaTech&apos;s proprietary Project Helix design files have been
          leaked to underground forums. Initial forensics suggest an insider
          threat with possible external coordination.
        </P>
      </div>

      <div>
        <H2>Mission Objectives</H2>
        <ul className="list-decimal list-inside space-y-1 text-white/90">
          <li>Identify the method of data exfiltration</li>
          <li>Determine the insider responsible for the leak</li>
          <li>Recover the final access key for Project Helix</li>
        </ul>
      </div>

      <div>
        <H2>Authorized Tools</H2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <code className="font-mono text-emerald-400">nmap</code> – network
            scanning
          </li>
          <li>
            <code className="font-mono text-emerald-400">wireshark</code> –
            packet analysis
          </li>
          <li>
            <code className="font-mono text-emerald-400">strings / grep</code> –
            text extraction
          </li>
          <li>
            <code className="font-mono text-emerald-400">john / hashcat</code> –
            password cracking
          </li>
          <li>Text editors, CSV viewers</li>
        </ul>
      </div>

      <div>
        <H2>Time Limit</H2>
        <P>
          <span className="bg-red-600 px-2 py-1 rounded text-white font-bold">
            60 minutes
          </span>
        </P>
      </div>

      <div>
        <H2>Deliverables</H2>
        <ul className="list-disc list-inside space-y-1">
          <li>Name of insider threat</li>
          <li>Method of data exfiltration</li>
          <li>Final access key (FLAG format)</li>
        </ul>
      </div>

      <P className="italic">Good luck, investigator.</P>
    </div>
  ),

timeline: (
  <div className="space-y-6">
    <H1 className="text-2xl font-bold tracking-wide uppercase">
      Project Helix Breach Timeline
    </H1>
    <P className="italic text-white/70">September 8–9, 2025</P>

    <div className="max-h-[600px] overflow-y-auto rounded-xl bg-gradient-to-b from-black/40 via-black/30 to-black/40 p-6 border border-white/20 shadow-lg">
      <ul className="space-y-3">
        {[
          { time: "23:45", event: "Last legitimate access to Project Helix files by Lead Developer Emily Chen (192.168.1.12)"},
          { time: "00:12", event: "Automated backup job completed successfully on server HELIX-DB01" },
          { time: "00:17", event: "HR Manager Robert Davis (192.168.1.16) logs in to HR portal" },
          { time: "00:19", event: "Payroll script executed by Accountant Samantha Turner (192.168.1.33)" },
          { time: "00:21", event: "Sales Manager Laura Anderson (192.168.1.27) uploads client presentation draft to shared drive" },
          { time: "00:25", event: "Internal Slack message exchange between Engineering (Lisa Wang, Michael Johnson) and IT Security" },
          { time: "00:30", event: "Multiple failed SSH login attempts detected on server" },
          { time: "00:33", event: "Research Scientist Anthony Harris (192.168.1.30) runs late-night experiment data sync" },
          { time: "00:37", event: "Outbound DNS queries from 192.168.1.45 to unfamiliar domains" },
          { time: "00:41", event: "Marketing Director Amanda Wilson (192.168.1.17) sends campaign metrics report via email" },
          { time: "00:44", event: "Security Analyst Michael Johnson (192.168.1.13) opens SIEM dashboard" },
          { time: "00:49", event: "UI/UX Designer Rachel Green (192.168.1.21) accesses design repo for mockup revisions" },
          { time: "00:52", event: "Employee Amanda Wilson (192.168.1.17) logs in remotely" },
          { time: "01:00", event: "Customer Support ticket update by Paul Jackson (192.168.1.28)" },
          { time: "01:05", event: "Login attempt to financial system by user 'j.taylor' (failed, wrong password)" },
          { time: "01:11", event: "Legal Counsel Melissa White (192.168.1.29) opens compliance documentation" },
          { time: "01:15", event: "Temporary account 'temp_build' created in Engineering AD group by CTO James Rodriguez (192.168.1.11)" },
          { time: "01:18", event: "Office Manager Karen Miller (192.168.1.31) updates meeting calendar invites" },
          { time: "01:21", event: "DevOps Engineer Christopher Lee (192.168.1.18) restarts Jenkins build" },
          { time: "01:25", event: "Quality Assurance Kevin Thompson (192.168.1.20) runs regression test suite" },
          { time: "01:28", event: "Password change request submitted for account 'jtaylor'" },
          { time: "01:34", event: "VPN session established from 192.168.1.45 using valid credentials" },
          { time: "01:40", event: "Project Manager Lisa Wang (192.168.1.14) comments on Trello board tasks" },
          { time: "01:46", event: "Database Admin Steven Clark (192.168.1.22) tunes query performance" },
          { time: "01:50", event: "Unusual spike in CPU usage detected on server HELIX-APP02" },
          { time: "01:53", event: "Network Engineer Jason Martinez (192.168.1.24) adjusts switch configuration" },
          { time: "02:05", event: "Successful SSH login from 192.168.1.45 (Jennifer Taylor)" },
          { time: "02:08", event: "FTP connection established from same IP" },
          { time: "02:10", event: "Web server access to /backup/helix_specs.zip from 192.168.1.45" },
          { time: "02:11", event: "Archive file helix_specs.zip compressed into smaller chunks" },
          { time: "02:12", event: "Large data transfer detected on network monitoring" },
          { time: "02:13", event: "Financial Analyst Maria Garcia (192.168.1.19) runs Excel macro for Q3 projections" },
          { time: "02:14", event: "Firewall alert: outbound transfer to external IP 185.222.81.14 flagged (origin: 192.168.1.45)" },
          { time: "02:15", event: "FTP connection terminated" },
          { time: "02:18", event: "Log clearing commands executed on HELIX-APP02 (/var/log/secure truncated) by account 'jtaylor'" },
          { time: "02:21", event: "Content Writer Stephanie Hall (192.168.1.25) updates marketing blog draft" },
          { time: "02:27", event: "Network monitoring tool restarted unexpectedly by Systems Admin David Brown (192.168.1.15)" },
          { time: "02:35", event: "CEO Sarah Mitchell (192.168.1.10) reads overnight executive summary on tablet" },
          { time: "02:44", event: "Login attempt from workstation 192.168.1.32 (Ryan Moore - Junior Developer, failed)" },
          { time: "02:50", event: "R&D scientist Anthony Harris uploads non-Helix data to research cloud storage" },
          { time: "03:10", event: "Security system alert suppressed via rule modification (account: 'mjohnson')" },
          { time: "03:22", event: "Suspicious PowerShell script executed on workstation 192.168.1.45 (Jennifer Taylor)" },
          { time: "04:00", event: "Normal scheduled database consistency check runs" },
          { time: "04:18", event: "IT Operations routine patching script started by Steven Clark" },
          { time: "05:02", event: "HR Manager Robert Davis processes leave requests" },
          { time: "06:15", event: "Accountant Samantha Turner exports finance ledger" },
          { time: "07:25", event: "User 'rmoore' (Ryan Moore) accessed email from mobile device" },
          { time: "07:58", event: "Sales Manager Laura Anderson downloads CRM report" },
          { time: "08:10", event: "Project Helix Git repo integrity check completed, anomalies flagged by Emily Chen (Lead Developer)" },
          { time: "08:30", event: "Project Helix files discovered on dark web forum 'TechLeaks'" },
          { time: "09:00", event: "Investigation initiated by CTO James Rodriguez" },
       ].map((log, idx) => {
          // Determine badge color based on keywords
          let colorClass = "text-green-400"; // default
          if (log.event.toLowerCase().includes("failed") ||
              log.event.toLowerCase().includes("suspicious") ||
              log.event.toLowerCase().includes("alert") ||
              log.event.toLowerCase().includes("helix_specs.zip") ||
              log.event.toLowerCase().includes("critical")) {
            colorClass = "text-red-500";
          } else if (log.event.toLowerCase().includes("warning") ||
                     log.event.toLowerCase().includes("flagged")) {
            colorClass = "text-yellow-400";
          }

          // Highlight IP addresses and user names
          const formattedEvent = log.event
            .replace(/(\b\d{1,3}(?:\.\d{1,3}){3}\b)/g, '<span class="text-cyan-400">$1</span>')
            .replace(/\b(Emily Chen|Robert Davis|Samantha Turner|Lisa Wang|Michael Johnson|Jennifer Taylor|Laura Anderson)\b/g, '<span class="text-pink-400 font-semibold">$1</span>');

          return (
            <li
              key={idx}
              className="flex items-start space-x-3 bg-white/5 p-2 rounded-md hover:bg-white/10 transition"
            >
              <span className={`font-mono min-w-[60px] ${colorClass}`}>{log.time}</span>
              <span dangerouslySetInnerHTML={{ __html: formattedEvent }}></span>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
),

  // Individual employee profiles
  employee_1: (
    <div className="space-y-4">
      <H1>EMPLOYEE PROFILE – CONFIDENTIAL</H1>
      <P className="uppercase font-semibold text-white/70">Personnel File</P>
      <P>
        <strong>Name:</strong> Sarah Mitchell <br />
        <strong>Employee ID:</strong> 001 <br />
        <strong>Position:</strong> CEO <br />
        <strong>Department:</strong> Executive <br />
        <strong>Start Date:</strong> January 15, 2020 <br />
        <strong>Background Check:</strong> CLEARED <br />
        <strong>Security Clearance:</strong> Level 4
      </P>
      <H2>Personal Interests</H2>
      <ul className="list-disc list-inside space-y-1">
        <li>Server administration and automation</li>
        <li>Home lab networking projects</li>
        <li>Linux system optimization</li>
        <li>Building custom PC configurations</li>
      </ul>
      <P>
        <strong>Work Schedule:</strong> On-call rotations, 24/7 system monitoring <br />
        <strong>Remote Work:</strong> Frequent for emergency response <br />
        <strong>Recent Performance:</strong> Satisfactory <br />
        <strong>Notes:</strong> Restarted network monitoring tool at 02:27, which is unusual timing.
      </P>
    </div>
  ),

   employee_2: (
    <div className="space-y-4">
      <H1>EMPLOYEE PROFILE – CONFIDENTIAL</H1>
      <P className="uppercase font-semibold text-white/70">Personnel File</P>
      <P>
        <strong>Name:</strong> James Rodriguez <br />
        <strong>Employee ID:</strong> 002 <br />
        <strong>Position:</strong> CTO <br />
        <strong>Department:</strong> Technology <br />
        <strong>Start Date:</strong> March 10, 2020 <br />
        <strong>Background Check:</strong> CLEARED <br />
        <strong>Security Clearance:</strong> Level 4
      </P>
      <H2>Personal Interests</H2>
      <ul className="list-disc list-inside space-y-1">
        <li>Emerging technology research</li>
        <li>AI and machine learning conferences</li>
        <li>Technical architecture planning</li>
        <li>Mentoring engineering teams</li>
      </ul>
      <P>
        <strong>Work Schedule:</strong> Executive hours, oversight responsibilities <br />
        <strong>Remote Work:</strong> Approved as needed <br />
        <strong>Recent Performance:</strong> Outstanding <br />
        <strong>Notes:</strong> Has administrative access but delegates technical tasks.
      </P>
    </div>
  ),

  employee_3: (
    <div className="space-y-4">
      <H1>EMPLOYEE PROFILE – CONFIDENTIAL</H1>
      <P className="uppercase font-semibold text-white/70">Personnel File</P>
      <P>
        <strong>Name:</strong> Emily Chen <br />
        <strong>Employee ID:</strong> 003 <br />
        <strong>Position:</strong> Lead Developer <br />
        <strong>Department:</strong> Engineering <br />
        <strong>Start Date:</strong> September 1, 2021 <br />
        <strong>Background Check:</strong> CLEARED <br />
        <strong>Security Clearance:</strong> Level 3
      </P>
      <H2>Personal Interests</H2>
      <ul className="list-disc list-inside space-y-1">
        <li>Puzzle-solving, escape rooms</li>
        <li>Weekend photography trips</li>
        <li>Reading sci-fi novels</li>
        <li>Contributes to open-source software in spare time</li>
      </ul>
      <P>
        <strong>Work Schedule:</strong> Standard hours with occasional overtime <br />
        <strong>Remote Work:</strong> Approved 2 days per week <br />
        <strong>Recent Performance:</strong> Outstanding <br />
        <strong>Notes:</strong> Primary architect of Project Helix. Last legitimate access at 23:45.
      </P>
    </div>
  ),

  employee_4: (
    <div className="space-y-4">
      <H1>EMPLOYEE PROFILE – CONFIDENTIAL</H1>
      <P className="uppercase font-semibold text-white/70">Personnel File</P>
      <P>
        <strong>Name:</strong> Michael Johnson <br />
        <strong>Employee ID:</strong> 004 <br />
        <strong>Position:</strong> Security Analyst <br />
        <strong>Department:</strong> IT Security <br />
        <strong>Start Date:</strong> February 20, 2022 <br />
        <strong>Background Check:</strong> CLEARED <br />
        <strong>Security Clearance:</strong> Level 3
      </P>
      <H2>Personal Interests</H2>
      <ul className="list-disc list-inside space-y-1">
        <li>Amateur radio operator</li>
        <li>Writes technical blogs on SIEM and intrusion detection</li>
        <li>Enjoys tabletop RPGs</li>
        <li>Owns home lab with multiple firewalls and IDS appliances</li>
      </ul>
      <P>
        <strong>Work Schedule:</strong> Shift-based, often late-night monitoring <br />
        <strong>Remote Work:</strong> Limited, requires VPN <br />
        <strong>Recent Performance:</strong> Satisfactory <br />
        <strong>Notes:</strong> Opened SIEM dashboard at 00:44. Alert suppression at 03:10 under his account.
      </P>
    </div>
  ),

  employee_5: (
    <div className="space-y-4">
      <H1>EMPLOYEE PROFILE – CONFIDENTIAL</H1>
      <P className="uppercase font-semibold text-white/70">Personnel File</P>
      <P>
        <strong>Name:</strong> Lisa Wang <br />
        <strong>Employee ID:</strong> 005 <br />
        <strong>Position:</strong> Project Manager <br />
        <strong>Department:</strong> Engineering <br />
        <strong>Start Date:</strong> August 5, 2021 <br />
        <strong>Background Check:</strong> CLEARED <br />
        <strong>Security Clearance:</strong> Level 2
      </P>
      <H2>Personal Interests</H2>
      <ul className="list-disc list-inside space-y-1">
        <li>Agile methodology and project optimization</li>
        <li>Team building and process improvement</li>
        <li>Hiking and outdoor activities</li>
        <li>Professional development courses</li>
      </ul>
      <P>
        <strong>Work Schedule:</strong> Standard business hours <br />
        <strong>Remote Work:</strong> Approved 2 days per week <br />
        <strong>Recent Performance:</strong> Exceeds Expectations <br />
        <strong>Notes:</strong> Manages Project Helix timeline. Active on Trello at 01:40.
      </P>
    </div>
  ),

  employee_6: (
    <div className="space-y-4">
      <H1>EMPLOYEE PROFILE – CONFIDENTIAL</H1>
      <P className="uppercase font-semibold text-white/70">Personnel File</P>
      <P>
        <strong>Name:</strong> David Brown <br />
        <strong>Employee ID:</strong> 006 <br />
        <strong>Position:</strong> Systems Admin <br />
        <strong>Department:</strong> IT Operations <br />
        <strong>Start Date:</strong> November 12, 2020 <br />
        <strong>Background Check:</strong> CLEARED <br />
        <strong>Security Clearance:</strong> Level 3
      </P>
      <H2>Personal Interests</H2> 
      <ul className="list-disc list-inside space-y-1"> 
        <li>Home networking enthusiast</li> 
        <li>Plays competitive online games</li> 
        <li>Collects retro computer hardware</li> 
        <li>Part-time lecturer at local tech community center</li> 
        </ul> 
        <P> <strong>Work Schedule:</strong>
         On-call rotations, often logs in odd hours for network changes 
         <br /> 
         <strong>Remote Work:</strong>
          Frequent due to 24/7 responsibilities 
          <br /> 
          <strong>Recent Performance:</strong>
           Consistently strong <br />
            <strong>Notes:</strong>
             Several late-night SSH logins during breach window, but tied to patching tasks. </P>
      </div>
  ),

  employee_7: (
    <div className="space-y-4">
      <H1>EMPLOYEE PROFILE – CONFIDENTIAL</H1>
      <P className="uppercase font-semibold text-white/70">Personnel File</P>
      <P>
        <strong>Name:</strong> Jennifer Taylor <br />
        <strong>Employee ID:</strong> 007 <br />
        <strong>Position:</strong> Senior Developer <br />
        <strong>Department:</strong> Engineering <br />
        <strong>Start Date:</strong> June 10, 2022 <br />
        <strong>Background Check:</strong> CLEARED <br />
        <strong>Security Clearance:</strong> Level 2
      </P>
      <H2>Personal Interests</H2>
      <ul className="list-disc list-inside space-y-1">
        <li>Freelance web development projects</li>
        <li>Active on various technical forums and communities</li>
        <li>Cryptocurrency trading as a hobby</li>
        <li>Recently mentioned financial pressures due to medical bills</li>
      </ul>
      <P>
        <strong>Work Schedule:</strong> Standard hours but frequently accesses systems remotely <br />
        <strong>Remote Work:</strong> Approved 3 days per week <br />
        <strong>Recent Performance:</strong> Meets Expectations (declined from previous &quot;Exceeds&quot;) <br />
        <strong>Notes:</strong> Multiple suspicious activities: SSH login at 02:05, FTP connection, PowerShell script at 03:22. <br />
        <strong>IP Address:</strong> 192.168.1.45 <br />
        <strong>Recent IT tickets:</strong> Multiple VPN connection issues, requested elevated privileges for &quot;testing purposes.&quot;
      </P>
    </div>
  ),

  employee_8: (
    <div className="space-y-4">
      <H1>EMPLOYEE PROFILE – CONFIDENTIAL</H1>
      <P className="uppercase font-semibold text-white/70">Personnel File</P>
      <P>
        <strong>Name:</strong> Robert Davis <br />
        <strong>Employee ID:</strong> 008 <br />
        <strong>Position:</strong> HR Manager <br />
        <strong>Department:</strong> Human Resources <br />
        <strong>Start Date:</strong> April 22, 2021 <br />
        <strong>Background Check:</strong> CLEARED <br />
        <strong>Security Clearance:</strong> Level 2
      </P>
      <H2>Personal Interests</H2>
      <ul className="list-disc list-inside space-y-1">
        <li>Employee relations and workplace culture</li>
        <li>Professional HR certification courses</li>
        <li>Corporate compliance and policy development</li>
        <li>Community volunteer work</li>
      </ul>
      <P>
        <strong>Work Schedule:</strong> Standard business hours <br />
        <strong>Remote Work:</strong> Limited, confidential data restrictions <br />
        <strong>Recent Performance:</strong> Satisfactory <br />
        <strong>Notes:</strong> Logged into HR portal at 00:17. Processed leave requests at 05:02.
      </P>
    </div>
  ),

  employee_9: (
    <div className="space-y-4">
      <H1>EMPLOYEE PROFILE – CONFIDENTIAL</H1>
      <P className="uppercase font-semibold text-white/70">Personnel File</P>
      <P>
        <strong>Name:</strong> Amanda Wilson <br />
        <strong>Employee ID:</strong> 009 <br />
        <strong>Position:</strong> Marketing Director <br />
        <strong>Department:</strong> Marketing <br />
        <strong>Start Date:</strong> January 18, 2021 <br />
        <strong>Background Check:</strong> CLEARED <br />
        <strong>Security Clearance:</strong> Level 1
      </P>
      <H2>Personal Interests</H2>
      <ul className="list-disc list-inside space-y-1">
        <li>Digital marketing trends and strategies</li>
        <li>Social media analytics and campaign optimization</li>
        <li>Brand development and creative direction</li>
        <li>Industry networking events</li>
      </ul>
      <P>
        <strong>Work Schedule:</strong> Standard hours with campaign deadlines <br />
        <strong>Remote Work:</strong> Approved 2 days per week <br />
        <strong>Recent Performance:</strong> Exceeds Expectations <br />
        <strong>Notes:</strong> Sent campaign metrics at 00:41. Remote login at 00:52. No technical access to Project Helix.
      </P>
    </div>
  ),

  // Auth log
auth_log: (
  <div className="space-y-4">
    <H1>AUTHENTICATION LOG – CONFIDENTIAL</H1>
    <P className="text-sm text-white/70 mb-4">September 8-9, 2025 | Server: webserver</P>

    <div className="bg-black/60 rounded-lg p-4 font-mono text-sm max-h-[600px] overflow-y-auto">
      <div className="space-y-1">
        {[
          "Sep  8 23:45:23 webserver sshd[12100]: Accepted password for echen from 192.168.1.12 port 51234 ssh2",
          "Sep  8 23:46:11 webserver sudo:   echen : TTY=pts/2 ; PWD=/home/echen ; USER=root ; COMMAND=/usr/bin/git pull",
          "Sep  8 23:50:01 webserver sshd[12145]: Accepted password for rdavis from 192.168.1.16 port 51278 ssh2",
          "Sep  8 23:52:07 webserver CRON[12157]: (sturner) CMD (/usr/local/bin/payroll_run)",
          "Sep  8 23:55:02 webserver sshd[12456]: Failed password for jtaylor from 192.168.1.45 port 52341 ssh2",
          "Sep  8 23:57:18 webserver sshd[12489]: Failed password for jtaylor from 192.168.1.45 port 52358 ssh2",
          "Sep  8 23:58:12 webserver sshd[12510]: Accepted password for dbrown from 192.168.1.15 port 52380 ssh2",
          "Sep  9 00:00:04 webserver systemd[1]: Started Session 102 of user rmoore.",
          "Sep  9 00:01:33 webserver sshd[12612]: Failed password for unknown from 203.0.113.55 port 53412 ssh2",
          "Sep  9 00:08:44 webserver sudo:   jrodriguez : TTY=pts/1 ; PWD=/root ; USER=root ; COMMAND=/usr/sbin/useradd temp_build",
          "Sep  9 00:12:02 webserver CRON[12701]: (root) CMD (/usr/local/bin/backup_job)",
          "Sep  9 00:30:45 webserver sshd[13021]: Failed password for admin from 192.168.1.45 port 52401 ssh2",
          "Sep  9 00:32:12 webserver sshd[13034]: Failed password for root from 192.168.1.45 port 52418 ssh2",
          "Sep  9 00:37:51 webserver systemd[1]: NetworkManager-dispatcher: firing up scripts (outbound-dns-check)",
          "Sep  9 00:41:10 webserver sshd[13122]: Accepted password for awilson from 192.168.1.17 port 52511 ssh2",
          "Sep  9 00:44:02 webserver su: pam_unix(su:auth): authentication failure; logname= uid=1002 euid=0 tty=/dev/pts/5 ruser=unknown rhost=192.168.1.100 user=mjohnson",
          "Sep  9 00:49:17 webserver sshd[13203]: Accepted password for rgreen from 192.168.1.21 port 52578 ssh2",
          "Sep  9 00:52:41 webserver sshd[13255]: Accepted password for clee from 192.168.1.18 port 52601 ssh2",
          "Sep  9 01:05:09 webserver sshd[13321]: Failed password for j.taylor from 203.0.113.10 port 53622 ssh2",
          "Sep  9 01:11:33 webserver sshd[13345]: Accepted password for mwhite from 192.168.1.29 port 52678 ssh2",
          "Sep  9 01:15:14 webserver sshd[13378]: Accepted password for jrodriguez from 192.168.1.11 port 52712 ssh2",
          "Sep  9 01:18:50 webserver systemd[1]: Started Session 109 of user kmiller.",
          "Sep  9 01:21:44 webserver sshd[13412]: Accepted password for clee from 192.168.1.18 port 52755 ssh2",
          "Sep  9 01:25:14 webserver CRON[13455]: (kthompson) CMD (/opt/qa/run_tests.sh)",
          "Sep  9 01:28:07 webserver su: (root) USER=root by jrodriguez",
          "Sep  9 01:33:21 webserver sshd[13501]: Accepted password for jtaylor from 10.0.0.9 port 54021 ssh2",
          "Sep  9 01:34:12 webserver sshd[13504]: PAM: authentication info for user=jtaylor",
          "Sep  9 01:40:02 webserver sudo:   lwang : TTY=pts/6 ; PWD=/home/lwang ; USER=root ; COMMAND=/usr/bin/trello_cli update",
          "Sep  9 01:46:09 webserver sshd[13578]: Accepted password for sclark from 192.168.1.22 port 54111 ssh2",
          "Sep  9 01:50:11 webserver kernel: [UFW BLOCK] IN=eth0 OUT= MAC=... SRC=10.5.5.6 DST=192.168.1.45 PROTO=TCP SPT=34567 DPT=53",
          "Sep  9 01:53:33 webserver sshd[13622]: Accepted password for jmartinez from 192.168.1.24 port 54201 ssh2",
          "Sep  9 02:05:33 webserver sshd[14567]: Accepted password for jtaylor from 192.168.1.45 port 52501 ssh2",
          "Sep  9 02:05:34 webserver pam_unix(sshd:session): session opened for user jtaylor by (uid=0)",
          "Sep  9 02:05:47 webserver sudo:   jtaylor : TTY=pts/3 ; PWD=/home/jtaylor ; USER=root ; COMMAND=/bin/cp /home/jtaylor/helix_specs.txt /tmp/",
          "Sep  9 02:06:12 webserver scp[14590]: /home/jtaylor/helix_specs.txt -> /tmp/helix_specs.txt",
          "Sep  9 02:07:02 webserver ftp[14612]: FTP session from 192.168.1.45 to 185.222.81.14:21 established",
          "Sep  9 02:08:40 webserver ftp[14612]: FTP STOR command received for helix_specs.txt from 192.168.1.45",
          "Sep  9 02:09:30 webserver ftp[14612]: FTP session closed, bytes transferred: 15678923",
          "Sep  9 02:10:05 webserver sshd[14645]: Accepted password for sysadmin from 192.168.1.15 port 54612 ssh2",
          "Sep  9 02:11:18 webserver sudo:   jtaylor : TTY=pts/4 ; PWD=/home/jtaylor ; USER=root ; COMMAND=/usr/bin/shred /tmp/helix_specs.txt",
          "Sep  9 02:12:02 webserver audit[14678]: ANOMALY: logrotate truncated /var/log/secure by user jtaylor",
          "Sep  9 02:15:42 webserver sshd[14568]: pam_unix(sshd:session): session closed for user jtaylor",
          "Sep  9 02:17:09 webserver systemd[1]: Stopping Session 123 of user jtaylor.",
          "Sep  9 02:27:48 webserver sshd[14790]: Accepted password for dbrown from 192.168.1.15 port 54901 ssh2",
          "Sep  9 02:33:10 webserver sshd[14812]: Failed password for rmoore from 192.168.1.32 port 55212 ssh2",
          "Sep  9 03:10:12 webserver sudo:   mjohnson : TTY=pts/2 ; PWD=/home/mjohnson ; USER=root ; COMMAND=/usr/bin/siem_rule_update",
          "Sep  9 03:22:05 webserver sudo:   jtaylor : TTY=pts/6 ; PWD=/home/jtaylor ; USER=root ; COMMAND=/usr/bin/powershell -ExecutionPolicy Bypass -File /tmp/exec.ps1",
          "Sep  9 04:01:02 webserver CRON[15001]: (scarter) CMD (/usr/local/bin/db_consistency_check)",
          "Sep  9 07:45:23 webserver sshd[15234]: Accepted password for sysadmin from 192.168.1.15 port 53012 ssh2",
        ].map((line, idx) => {
          let colorClass = "text-green-400";
          if (line.includes("Failed password") ||line.includes("helix_specs.txt") || line.includes("authentication failure")) colorClass = "text-red-400";
          if (line.includes("ANOMALY") || line.includes("UFW BLOCK")) colorClass = "text-yellow-400";
          
          return (
            <div key={idx} className={colorClass}>
              {line}
            </div>
          );
        })}
      </div>
    </div>
  </div>
),


  // Webserver log
 webserver_log: (
  <div className="space-y-4">
    <H1>WEB SERVER ACCESS LOG – CONFIDENTIAL</H1>
    <P className="text-sm text-white/70 mb-4">September 8-9, 2025 | Server: WEB-01</P>

    <div className="bg-black/60 rounded-lg p-4 font-mono text-sm max-h-[600px] overflow-y-auto">
      <div className="space-y-1">
        {[
          '192.168.1.12 - - [08/Sep/2025:23:45:23 +0000] "GET /projects/helix/dashboard HTTP/1.1" 200 4523 "https://intranet.novatech.local/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"',
          '192.168.1.19 - - [08/Sep/2025:23:50:01 +0000] "POST /finance/upload_report HTTP/1.1" 200 2314 "https://intranet.novatech.local/finance" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"',
          '192.168.1.15 - - [08/Sep/2025:23:58:12 +0000] "GET /admin/backup_status HTTP/1.1" 200 1205 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"',
          '192.168.1.16 - - [09/Sep/2025:00:17:09 +0000] "POST /hr/leave_request HTTP/1.1" 200 1842 "https://intranet.novatech.local/hr" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.27 - - [09/Sep/2025:00:21:55 +0000] "PUT /sales/upload_pitch.pptx HTTP/1.1" 200 54321 "https://intranet.novatech.local/sales" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.21 - - [09/Sep/2025:00:49:17 +0000] "GET /design/mockups/v2.png HTTP/1.1" 200 9321 "https://intranet.novatech.local/design" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.17 - - [09/Sep/2025:00:52:42 +0000] "POST /marketing/campaign_metrics HTTP/1.1" 200 2871 "https://intranet.novatech.local/marketing" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"',
          '192.168.1.29 - - [09/Sep/2025:01:11:33 +0000] "GET /legal/contracts/nda.pdf HTTP/1.1" 200 10482 "https://intranet.novatech.local/legal" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.11 - - [09/Sep/2025:01:15:14 +0000] "POST /admin/create_account HTTP/1.1" 200 1523 "https://intranet.novatech.local/admin" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.18 - - [09/Sep/2025:01:21:44 +0000] "POST /ci/build_trigger HTTP/1.1" 200 3324 "https://ci.novatech.local" "Mozilla/5.0 (X11; Linux x86_64)"',
          '192.168.1.22 - - [09/Sep/2025:01:46:09 +0000] "GET /db/query_stats HTTP/1.1" 200 1563 "https://intranet.novatech.local/db" "curl/7.68.0"',
          '192.168.1.45 - - [09/Sep/2025:02:10:05 +0000] "GET /backup/helix_specs.zip?download=true&auth=bypass HTTP/1.1" 200 15678923 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"',
          '192.168.1.45 - - [09/Sep/2025:02:11:22 +0000] "GET /backup/.hidden/.index HTTP/1.1" 200 421 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.19 - - [09/Sep/2025:02:13:07 +0000] "GET /finance/projections/q3.xlsx HTTP/1.1" 200 27642 "https://intranet.novatech.local/finance" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.25 - - [09/Sep/2025:02:21:54 +0000] "POST /marketing/blog_draft HTTP/1.1" 200 1984 "https://intranet.novatech.local/marketing" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.15 - - [09/Sep/2025:02:27:48 +0000] "GET /monitoring/restart_notice HTTP/1.1" 200 842 "-" "curl/7.68.0"',
          '192.168.1.10 - - [09/Sep/2025:02:35:18 +0000] "GET /executive/summary HTTP/1.1" 200 9321 "https://intranet.novatech.local/executive" "Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X)"',
          '192.168.1.32 - - [09/Sep/2025:02:44:09 +0000] "POST /engineering/git/login HTTP/1.1" 401 523 "https://intranet.novatech.local/git" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.30 - - [09/Sep/2025:02:50:37 +0000] "PUT /rnd/upload_experiment.zip HTTP/1.1" 200 98214 "https://intranet.novatech.local/rnd" "Mozilla/5.0 (X11; Linux x86_64)"',
          '192.168.1.13 - - [09/Sep/2025:03:10:12 +0000] "POST /siem/rule_update HTTP/1.1" 200 1421 "https://intranet.novatech.local/siem" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.45 - - [09/Sep/2025:03:22:05 +0000] "POST /powershell/exec.ps1 HTTP/1.1" 200 642 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.14 - - [09/Sep/2025:01:40:52 +0000] "GET /projects/helix/tasks HTTP/1.1" 200 2752 "https://intranet.novatech.local/projects" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"',
          '192.168.1.20 - - [09/Sep/2025:01:25:14 +0000] "POST /qa/test_report HTTP/1.1" 200 3111 "https://intranet.novatech.local/qa" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.33 - - [09/Sep/2025:06:15:47 +0000] "POST /finance/ledger_export HTTP/1.1" 200 7715 "https://intranet.novatech.local/finance" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.27 - - [09/Sep/2025:07:58:08 +0000] "GET /sales/crm_report HTTP/1.1" 200 11421 "https://intranet.novatech.local/sales" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.18 - - [09/Sep/2025:07:30:15 +0000] "GET /status/health HTTP/1.1" 200 342 "-" "curl/7.68.0"',
          '192.168.1.10 - - [09/Sep/2025:08:15:42 +0000] "GET /admin/alerts HTTP/1.1" 200 8934 "https://intranet.novatech.local/admin/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
          '192.168.1.12 - - [09/Sep/2025:08:10:07 +0000] "GET /projects/helix/git/repo_check HTTP/1.1" 200 2742 "https://intranet.novatech.local/projects" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"',
        ].map((line, idx) => {
          let colorClass = "text-green-400";
          if (line.includes(" 401 ") || line.includes(" 403 ")) colorClass = "text-red-400";
          if (line.includes("192.168.1.45") || line.includes("helix_specs.zip") || line.includes("auth=bypass")) colorClass = "text-pink-400";
          if (line.match(/\s\d{7,}\s/)) colorClass = "text-yellow-400"; // Large file transfers

          return (
            <div key={idx} className={colorClass}>
              {line}
            </div>
          );
        })}
      </div>
    </div>
  </div>
)
}