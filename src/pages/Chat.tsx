import { useState } from "react";
import { Link } from "react-router-dom";
import { Scale, BookOpen, FileText, Users, Gavel, ArrowLeft } from "lucide-react";
import { NyayaChatInput } from "@/components/ui/claude-style-chat-input";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (data: {
    message: string;
    files: any[];
    pastedContent: any[];
    model: string;
    isThinkingEnabled: boolean;
  }) => {
    console.log('Sending message:', data);
    
    // Add user message
    const userMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      type: 'user',
      content: data.message,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        type: 'assistant',
        content: `Thank you for your question about "${data.message}". This is a demonstration of the Nyaya AI interface. In the full version, I would provide detailed legal information with citations to relevant Indian laws, acts, and judgments.\n\n**Note:** Nyaya AI provides legal information, not legal advice. Please consult a qualified legal professional for specific matters.`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1500);
  };

  const currentHour = new Date().getHours();
  let greeting = 'Good morning';
  if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon';
  } else if (currentHour >= 18) {
    greeting = 'Good evening';
  }

  const suggestedQueries = [
    {
      icon: FileText,
      label: "Contracts",
      query: "What are the essential elements of a valid contract under Indian law?",
    },
    {
      icon: Users,
      label: "Rights",
      query: "What are my fundamental rights under the Indian Constitution?",
    },
    {
      icon: Gavel,
      label: "Property",
      query: "How does property inheritance work under Hindu Succession Act?",
    },
    {
      icon: BookOpen,
      label: "Business",
      query: "What are the compliance requirements for starting a company in India?",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background flex flex-col parchment-texture">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-emboss">
                <Scale className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold text-primary tracking-wide">
                  Nyaya AI
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-0.5">
                  Ask Legal Questions
                </span>
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        {messages.length === 0 ? (
          // Empty State
          <div className="w-full max-w-2xl mx-auto">
            {/* Greeting */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Scale className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-primary mb-3 tracking-tight">
                {greeting}
              </h1>
              <p className="text-muted-foreground">
                How can I help you understand Indian law today?
              </p>
            </div>

            {/* Chat Input */}
            <NyayaChatInput onSendMessage={handleSendMessage} />

            {/* Suggested Queries */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {suggestedQueries.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage({
                    message: item.query,
                    files: [],
                    pastedContent: [],
                    model: 'nyaya-standard',
                    isThinkingEnabled: false,
                  })}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground bg-card border border-border rounded-lg hover:bg-secondary hover:text-foreground hover:border-border transition-all duration-200 shadow-page hover:shadow-book"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Messages View
          <div className="w-full max-w-3xl mx-auto flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-6 pb-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-xl ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border shadow-book'
                    }`}
                  >
                    {message.type === 'assistant' && (
                      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                        <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                          <Scale className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">Nyaya AI</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat Input at bottom */}
            <div className="pt-4 border-t border-border">
              <NyayaChatInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
