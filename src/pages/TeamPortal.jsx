import { useState } from "react";
import { Link } from "react-router-dom";
import { CONFIG } from "../config";
import RegistrationForm from "../components/RegistrationForm";

export default function TeamPortal() {
  const [pin, setPin] = useState(() => sessionStorage.getItem("amqa_pin") || "");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const unlocked = pin !== "" && pin === CONFIG.TEAM_PIN;

  function unlock(e) {
    e.preventDefault();
    if (input === CONFIG.TEAM_PIN) {
      sessionStorage.setItem("amqa_pin", input);
      setPin(input);
      setError("");
    } else {
      setError("Incorrect PIN.");
    }
  }

  function lock() {
    sessionStorage.removeItem("amqa_pin");
    setPin("");
    setInput("");
  }

  return (
    <div className="pattern-star min-h-screen px-4 py-10">
      <div className="mx-auto max-w-xl">
        <div className="mb-6 text-center">
          <p className="font-arabic text-3xl text-gold-300">المرتقى</p>
          <h1 className="mt-1 font-display text-2xl font-bold text-white">Ground Team Registration</h1>
          <p className="text-sm text-emerald-100/80">Al Murthaqa Quran Academy</p>
        </div>

        <div className="rounded-2xl bg-paper p-6 shadow-2xl sm:p-8">
          {!unlocked ? (
            <form onSubmit={unlock} className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-emerald-900">Team PIN</span>
                <input
                  type="password"
                  inputMode="numeric"
                  autoFocus
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter PIN"
                  className="w-full rounded-lg border border-emerald-900/20 px-4 py-3 text-lg tracking-widest focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-gold-400/60"
                />
                {error && <span className="mt-1 block text-sm text-red-700">{error}</span>}
              </label>
              <button className="w-full rounded-lg bg-emerald-900 px-6 py-3.5 font-semibold text-gold-300 hover:bg-emerald-800">
                Open registration form
              </button>
            </form>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between border-b border-emerald-900/10 pb-4">
                <span className="text-sm text-ink/70">Team access unlocked</span>
                <button onClick={lock} className="text-sm font-semibold text-emerald-800 underline underline-offset-4">
                  Lock
                </button>
              </div>
              <RegistrationForm mode="team" pin={pin} />
            </>
          )}
        </div>

        <p className="mt-6 text-center text-sm">
          <Link to="/" className="text-emerald-100/80 underline underline-offset-4">
            Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
