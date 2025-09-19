"use client"
import { Input } from "@/components/ui/input"
import {useRef,useState,useEffect}  from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation"
export default function Start() {
  const [answer,setAnswer] = useState("");
  const [teamname,setTeamName] = useState("");
  const router = useRouter()
const inputRef = useRef<HTMLInputElement>(null);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value
  setAnswer(value);
  if(value.trim().toUpperCase() === "PROJECT HELIX DESIGN FILES"){
    Cookie.set("status","1",{expires:1});
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    router.push("/files");
    void answer;
  }
};

useEffect(()=>{
  if(Cookie.get("status")==="1"){
    router.replace("/files");
  }
    const value = Cookie.get("teamName");
    setTeamName(value || " ");
// run on mount only
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden">
      {/* same decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-300 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-start justify-center">
        <p className="text-white absolute top-4">{teamname}</p>
        <article className="w-full max-w-3xl bg-white/5 border border-white/8 rounded-2xl p-8 shadow-sm">
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">OPERATION HELIX BREACH - CYBERSECURITY INVESTIGATION</h1>

          <div className="text-sm flex flex-wrap gap-4 text-white/80 mt-2">
            <span><strong>Date:</strong> September 9, 2025</span>
            <span><strong>Company:</strong> NovaTech Industries</span>
            <span><strong>Classification:</strong> CONFIDENTIAL</span>
          </div>

          <h2 className="mt-6 text-xl font-semibold text-white">SITUATION</h2>
          <p className="leading-7 text-white/90 mt-3">
            NovaTech&apos;s proprietary{" "}
            <span
              className="text-red-500 font-bold  px-1 rounded"
              //aria-label="highlighted phrase: Project Helix design files"
            >
              PROJECT HELIX DESIGN FILES
            </span>{" "}
            have been leaked to underground forums. Initial forensics suggest an insider threat with possible external coordination.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-white">MISSION OBJECTIVES</h3>
          <ol className="list-decimal list-inside mt-2 text-white/90">
            <li className="mt-1">Identify the method of data exfiltration</li>
            <li className="mt-1">Determine the insider responsible for the leak</li>
            <li className="mt-1">Recover the final access key for Project Helix</li>
          </ol>

          <h3 className="mt-6 text-lg font-semibold text-white">AUTHORIZED TOOLS</h3>
          <ul className="list-disc list-inside mt-2 text-white/90">
            <li className="mt-1">nmap (network scanning)</li>
            <li className="mt-1">wireshark (packet analysis)</li>
            <li className="mt-1">strings / grep (text extraction)</li>
            <li className="mt-1">john / hashcat (password cracking)</li>
            <li className="mt-1">Text editors, CSV viewers</li>
          </ul>

          <div className="mt-4 p-4 rounded-md bg-white/3 border border-white/6 text-white/90">
            <p className="mb-1"><strong>TIME LIMIT:</strong> 60 minutes</p>
            <p className="mb-0"><strong>DELIVERABLES:</strong></p>
            <ul className="list-disc list-inside mt-2">
              <li className="mt-1">Name of insider threat</li>
              <li className="mt-1">Method of data exfiltration</li>
              <li className="mt-1">Final access key (FLAG format)</li>
            </ul>
          </div>

          <p className="mt-6 text-white/90">Good luck, investigator.</p>
          <br />
          <label htmlFor="question" className="mt-5 text-white/90 font-semibold">Which file has been leaked to the underground forums?</label>
          <Input id="question" type="text" placeholder="Type the exact file name" ref={inputRef} className="mt-2 bg-white/10 text-white placeholder:text-white/60" onChange={handleInputChange}/>
        </article>
      </main>
    </div>
  )
}
