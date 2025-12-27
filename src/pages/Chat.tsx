import { useState } from "react";
import { Link } from "react-router-dom";
import { Scale, BookOpen, FileText, Users, Gavel, ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
}

const suggestedQueries = [
  { icon: FileText, label: "Contracts", query: "What are the essential elements of a valid contract under Indian law?" },
  { icon: Users, label: "Rights", query: "What are my fundamental rights under the Indian Constitution?" },
  { icon: Gavel, label: "Property", query: "How does property inheritance work under Hindu Succession Act?" },
  { icon: BookOpen, label: "Business", query: "What are the compliance requirements for starting a company in India?" },
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = (query?: string) => {
    const message = query || input.trim();
    if (!message) return;

    setMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', content: message }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `Thank you for your question about "${message}". This is a demo of Nyaya AI. In the full version, I would provide detailed legal information with citations.\n\n**Note:** Nyaya AI provides legal information, not legal advice.`
      }]);
    }, 1500);
  };

  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="min-h-screen bg-background flex flex-col parchment-texture">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-serif text-xl font-semibold text-primary">Nyaya AI</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Ask Legal Questions</p>
            </div>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />Back
          </Link>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        {messages.length === 0 ? (
          <div className="w-full max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-serif text-3xl font-semibold text-primary mb-2">{greeting}</h1>
            <p className="text-muted-foreground mb-8">How can I help you understand Indian law today?</p>

            {/* Input */}
            <div className="relative mb-6">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                placeholder="Ask a legal question..."
                className="pr-12 min-h-[100px] resize-none"
              />
              <Button size="icon" className="absolute bottom-3 right-3" onClick={() => handleSend()} disabled={!input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {/* Suggested Queries */}
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedQueries.map((q, i) => (
                <button key={i} onClick={() => handleSend(q.query)} className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground bg-card border border-border rounded-lg hover:bg-secondary transition-colors">
                  <q.icon className="w-4 h-4" />{q.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-4 pb-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-xl ${m.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card border border-border'}`}>
                    {m.type === 'assistant' && (
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border">
                        <Scale className="w-4 h-4 text-primary" /><span className="text-sm font-medium">Nyaya AI</span>
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-wrap">{m.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-border">
              <div className="relative">
                <Textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())} placeholder="Ask a follow-up question..." className="pr-12 min-h-[60px] resize-none" />
                <Button size="icon" className="absolute bottom-3 right-3" onClick={() => handleSend()} disabled={!input.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
