import React, { useState } from "react";
import { ShoppingCart, Coffee, Phone, MessageCircle } from "lucide-react";
import Confetti from "react-confetti";
import "./Challenges.css";

const challenges = {
    easy: [
      { icon: ShoppingCart, title: "Ask for a grocery divider", description: "Politely ask a stranger in line for the divider.", points: 10 },
      { icon: Coffee, title: "Ask for a free coffee sample", description: "Go to a cafe and request a coffee sample.", points: 15 },
      { icon: Phone, title: "Call a stranger and compliment them", description: "Call someone randomly and say something nice.", points: 20 },
      { icon: MessageCircle, title: "Start a conversation with someone in line", description: "Initiate a small talk with a stranger.", points: 25 },
      { icon: ShoppingCart, title: "Ask for help reaching an item", description: "Ask someone to help you grab an item on a high shelf.", points: 10 },
      { icon: Coffee, title: "Compliment a barista", description: "Say something nice to the person making your coffee.", points: 15 },
      { icon: Phone, title: "Cold call and introduce yourself", description: "Call someone you don’t know and share something positive.", points: 20 },
      { icon: MessageCircle, title: "Say hi to a passerby", description: "Smile and greet someone walking past you.", points: 25 },
      { icon: ShoppingCart, title: "Ask someone for shopping advice", description: "Request a stranger’s opinion about a product.", points: 10 },
      { icon: Coffee, title: "Request a surprise drink", description: "Ask the barista to make you their favorite coffee.", points: 15 },
      { icon: Phone, title: "Leave a kind voicemail", description: "Call someone and leave a voice message with compliments.", points: 20 },
      { icon: MessageCircle, title: "Talk to someone at the park", description: "Initiate a short conversation with a stranger outdoors.", points: 25 },
      { icon: ShoppingCart, title: "Ask if a store has a secret menu", description: "Inquire about hidden items or deals.", points: 10 },
      { icon: Coffee, title: "Offer to pay for someone’s coffee", description: "Treat a stranger behind you to a cup.", points: 15 },
      { icon: Phone, title: "Call a family member and thank them", description: "Show appreciation to a loved one.", points: 20 },
      { icon: MessageCircle, title: "Give a compliment to a stranger", description: "Say something genuine to brighten their day.", points: 25 },
      { icon: ShoppingCart, title: "Ask someone about their favorite item", description: "Start a discussion about grocery favorites.", points: 10 },
      { icon: Coffee, title: "Say thank you to every staff member", description: "Acknowledge all service staff in a visit.", points: 15 },
      { icon: Phone, title: "Tell someone they inspired you", description: "Share admiration with someone you respect.", points: 20 },
      { icon: MessageCircle, title: "Ask someone how their day is", description: "Start a warm interaction with this question.", points: 25 },
      { icon: ShoppingCart, title: "Ask someone for recipe ideas", description: "Spark food-related conversation with a stranger.", points: 10 },
      { icon: Coffee, title: "Leave a note of gratitude", description: "Write a thank-you and leave it at a counter.", points: 15 },
      { icon: Phone, title: "Call and reconnect with an old friend", description: "Revive an old connection with a kind call.", points: 20 },
      { icon: MessageCircle, title: "Strike up a chat at a bus stop", description: "Break the silence with a short talk.", points: 25 },
      { icon: ShoppingCart, title: "Recommend a favorite product", description: "Suggest a beloved item to another shopper.", points: 10 },
      { icon: Coffee, title: "Wave at a neighbor", description: "Greet someone nearby you haven’t spoken to before.", points: 10 },
      { icon: MessageCircle, title: "Ask someone about their pet", description: "Start a light conversation by asking about their animal.", points: 15 },
      { icon: Phone, title: "Text a friend a compliment", description: "Send a kind message to brighten their day.", points: 20 },
      { icon: ShoppingCart, title: "Say ‘have a great day’ to a cashier", description: "End a transaction with a warm wish.", points: 10 },
      { icon: Coffee, title: "Hold the door open for someone", description: "Do a simple act of kindness in public.", points: 10 }
    ],
    medium: [
      { icon: ShoppingCart, title: "Negotiate a discount at a retail store", description: "Try to get a discount on an item at checkout.", points: 30 },
      { icon: Coffee, title: "Ask to join strangers for coffee", description: "Request to sit and chat with strangers at a café.", points: 35 },
      { icon: Phone, title: "Ask for a job interview on the spot", description: "Walk into a company and ask if you can interview.", points: 40 },
      { icon: MessageCircle, title: "Give a public speech in a busy area", description: "Talk about something you're passionate about in public.", points: 45 },
      { icon: ShoppingCart, title: "Request to shadow a worker", description: "Ask to observe someone doing their job.", points: 30 },
      { icon: Coffee, title: "Compliment a stranger’s outfit", description: "Genuinely praise someone’s style in public.", points: 35 },
      { icon: Phone, title: "Cold call a business", description: "Introduce yourself and ask a confident question.", points: 40 },
      { icon: MessageCircle, title: "Start a conversation in an elevator", description: "Break the awkward silence in a lift.", points: 45 },
      { icon: ShoppingCart, title: "Return something with no reason", description: "Go to a store and return a product confidently.", points: 30 },
      { icon: Coffee, title: "Give feedback to a café owner", description: "Provide suggestions or praise directly.", points: 35 },
      { icon: Phone, title: "Request a reference call", description: "Ask someone new to vouch for you.", points: 40 },
      { icon: MessageCircle, title: "Talk to someone on public transport", description: "Sit beside someone and chat.", points: 45 },
      { icon: ShoppingCart, title: "Negotiate a bundle offer", description: "Try to get a deal on multiple items.", points: 30 },
      { icon: Coffee, title: "Order something off-menu", description: "Invent your own drink idea.", points: 35 },
      { icon: Phone, title: "Call and volunteer your help", description: "Offer assistance without being asked.", points: 40 },
      { icon: MessageCircle, title: "Do a compliment walk", description: "Compliment multiple strangers in one outing.", points: 45 },
      { icon: ShoppingCart, title: "Ask a stranger for shopping help", description: "Pretend you’re new and seek guidance.", points: 30 },
      { icon: Coffee, title: "Invite someone to share a table", description: "Ask to sit where someone is already seated.", points: 35 },
      { icon: Phone, title: "Ask to collaborate on a project", description: "Cold pitch a peer about working together.", points: 40 },
      { icon: MessageCircle, title: "Publicly introduce yourself", description: "Say your name to a group out loud.", points: 45 },
      { icon: ShoppingCart, title: "Ask an employee for their favorite item", description: "Start a conversation at a store counter.", points: 30 },
      { icon: Coffee, title: "Talk to a barista about their day", description: "Genuinely engage with service staff.", points: 35 },
      { icon: Phone, title: "Call and ask someone about their career", description: "Learn more by asking deep questions.", points: 40 },
      { icon: MessageCircle, title: "Join a conversation in progress", description: "Politely jump into a discussion.", points: 45 },
      { icon: ShoppingCart, title: "Start a chat at the checkout line", description: "Talk to the person behind or ahead.", points: 30 },
      { icon: Phone, title: "Ask someone to review your resume", description: "Reach out for feedback on your work.", points: 35 },
      { icon: Coffee, title: "Compliment a coworker sincerely", description: "Say something genuine about their efforts.", points: 35 },
      { icon: MessageCircle, title: "Ask for public speaking advice", description: "Seek help on how to speak confidently.", points: 40 },
      { icon: ShoppingCart, title: "Offer to help someone carry bags", description: "Assist someone struggling with groceries.", points: 30 },
      { icon: Phone, title: "Call and schedule a networking call", description: "Take the initiative to connect professionally.", points: 40 }
    ],
    extreme: [
      { icon: ShoppingCart, title: "Start a dance party in a public place", description: "Get people involved in spontaneous dancing.", points: 50 },
      { icon: Coffee, title: "Propose to a stranger (as a joke)", description: "Fake propose to a stranger and gauge reaction.", points: 55 },
      { icon: Phone, title: "Pitch a business idea to a CEO", description: "Try to reach out and pitch to someone powerful.", points: 60 },
      { icon: MessageCircle, title: "Perform a stand-up routine in public", description: "Do a short comedy set in front of strangers.", points: 65 },
      { icon: ShoppingCart, title: "Sing loudly in a store", description: "Break into song while shopping.", points: 50 },
      { icon: Coffee, title: "Do a cartwheel in public", description: "Do something playful and bold.", points: 55 },
      { icon: Phone, title: "Call a radio station live", description: "Participate in a call-in show.", points: 60 },
      { icon: MessageCircle, title: "Tell a joke on a street corner", description: "Engage strangers with humor.", points: 65 },
      { icon: ShoppingCart, title: "Attempt to host a flash mob", description: "Coordinate a group surprise act.", points: 50 },
      { icon: Coffee, title: "Dance with a stranger", description: "Politely ask someone to dance in public.", points: 55 },
      { icon: Phone, title: "Call a business with fake accent", description: "Pretend for fun and confidence.", points: 60 },
      { icon: MessageCircle, title: "Shout out your dreams in public", description: "Express big ambitions out loud.", points: 65 },
      { icon: ShoppingCart, title: "Try on outrageous clothes and show off", description: "Be playful and bold in a store.", points: 50 },
      { icon: Coffee, title: "Ask for a job application while dancing", description: "Mix boldness with humor.", points: 55 },
      { icon: Phone, title: "Call someone and sing happy birthday", description: "Even if it’s not their birthday.", points: 60 },
      { icon: MessageCircle, title: "Start a group chant in public", description: "Rally strangers together briefly.", points: 65 },
      { icon: ShoppingCart, title: "Propose to your reflection", description: "Get silly and bold in a mirror.", points: 50 },
      { icon: Coffee, title: "Offer coffee to a stranger", description: "Buy and give coffee to someone unfamiliar.", points: 55 },
      { icon: Phone, title: "Prank call a friend for laughs", description: "Playfully and respectfully.", points: 60 },
      { icon: MessageCircle, title: "Perform a silly skit with a friend", description: "Do a short scene in public.", points: 65 },
      { icon: ShoppingCart, title: "Yell out positive affirmations", description: "Empower yourself and others loudly.", points: 50 },
      { icon: Coffee, title: "Announce fake news for fun", description: "Make up a fun, silly event.", points: 55 },
      { icon: Phone, title: "Call your crush and confess something", description: "Say something bold and honest.", points: 60 },
      { icon: MessageCircle, title: "Run in slow motion at a park", description: "Act out dramatic movement.", points: 65 },
      { icon: ShoppingCart, title: "Lead strangers in a silly game", description: "Invite people to join in playful activity.", points: 50 },
      { icon: Coffee, title: "Host a mini talent show in public", description: "Invite others to join or perform with you.", points: 65 },
      { icon: Phone, title: "Cold-call a podcast to share a story", description: "Contribute something bold live or recorded.", points: 60 },
      { icon: MessageCircle, title: "Improvise a funny poem in public", description: "Use humor to engage a crowd.", points: 60 },
      { icon: ShoppingCart, title: "Pretend you're a tour guide", description: "Narrate a fun fictional tour for strangers.", points: 55 },
      { icon: Coffee, title: "Offer high-fives to passersby", description: "Spread joy with energy and a smile.", points: 55 }
    ]
  };
  


export function Challenges() {
  const [difficulty, setDifficulty] = useState("easy");
  const [celebrate, setCelebrate] = useState(false);
  const [acceptedChallenges, setAcceptedChallenges] = useState<string[]>([]);

  const handleAccept = (title: string) => {
    setCelebrate(true);
    setAcceptedChallenges((prev) => [...prev, title]);
    setTimeout(() => setCelebrate(false), 3000);
  };

  return (
    <div className="challenges-page p-6 bg-gray-100 min-h-screen">
      {celebrate && <Confetti recycle={false} numberOfPieces={500} />}

      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Challenges</h1>

      <div className="difficulty-selector flex justify-center gap-4 mb-6">
        <button
          onClick={() => setDifficulty("easy")}
          className={`px-4 py-2 rounded-full font-semibold ${
            difficulty === "easy"
              ? "bg-indigo-600 text-white"
              : "bg-white text-indigo-600 border border-indigo-600"
          }`}
        >
          Easy
        </button>
        <button
          onClick={() => setDifficulty("medium")}
          className={`px-4 py-2 rounded-full font-semibold ${
            difficulty === "medium"
              ? "bg-yellow-500 text-white"
              : "bg-white text-yellow-500 border border-yellow-500"
          }`}
        >
          Medium
        </button>
        <button
          onClick={() => setDifficulty("extreme")}
          className={`px-4 py-2 rounded-full font-semibold ${
            difficulty === "extreme"
              ? "bg-red-500 text-white"
              : "bg-white text-red-500 border border-red-500"
          }`}
        >
          Extreme
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-h-[75vh] overflow-y-scroll px-4">
        {challenges[difficulty].map((challenge, index) => {
          const isLocked = difficulty !== "easy" && index >= 30;
          const isAccepted = acceptedChallenges.includes(challenge.title);

          return (
            <div
              key={challenge.title + index}
              className="challenge-item relative bg-white rounded-lg p-4 shadow-lg text-left"
              style={{
                filter: isLocked ? "blur(3px)" : "none",
                pointerEvents: isLocked ? "none" : "auto",
              }}
            >
              <challenge.icon size={28} className="text-indigo-700 mb-2" />
              <h2 className="text-lg font-bold text-gray-800 mb-1">{challenge.title}</h2>
              <p className="text-sm text-gray-700 italic mb-1">{challenge.description}</p>
              <p className="text-sm text-gray-900 font-semibold">Points: {challenge.points}</p>

              {!isLocked &&
                (isAccepted ? (
                  <span className="mt-3 inline-block text-green-700 font-semibold">Accepted</span>
                ) : (
                  <button
                    onClick={() => handleAccept(challenge.title)}
                    className="mt-3 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Accept
                  </button>
                ))}

              {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black/60 rounded-lg">
                  Unlock by completing Level 3
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
