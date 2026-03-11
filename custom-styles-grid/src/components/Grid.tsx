import type React from "react";
import { cn } from "../utils/utils";
import { BrainIcon, SquareMousePointer, Waypoints } from "lucide-react";

const ChatCard = () => {
  const chat = [
    {
      role: "user",
      text: "Hey AI",
    },
    {
      role: "assistant",
      text: "hello there! How can I help you today?",
    },
    {
      role: "user",
      text: "Create a billion dollar B2B SaaS",
    },
  ];

  const UserMessage = ({ text }: { text: string }) => {
    return (
      <div className="flex justify-end items-start gap-2 bg-blue-500 rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-lg py-2 px-4 w-fit ml-auto">
        <p className="text-sm text-white">{text}</p>
        <div className="rounded-full shrink-0 size-4 bg-linear-to-r from-blue-400 to-purple-500" />
      </div>
    );
  };

  const AIMessage = ({ text }: { text: string }) => {
    return (
      <div className="flex justify-start items-start gap-2 bg-gray-100 rounded-tr-full rounded-tl-full rounded-bl-lg rounded-br-full w-fit mr-auto py-2 px-4">
        <div className="size-4 bg-linear-to-r shrink-0 from-green-500 to-emerald-500 rounded-full" />
        <p className="text-sm text-black">{text}</p>
      </div>
    );
  };

  return (
    <div className="h-full bg-white w-full px-14 pt-3 flex flex-col gap-4 relative z-20">
      <input
        type="text"
        className="w-[calc(100%-6rem)] h-12 mx-auto bg-white border border-neutral-200 rounded-md absolute bottom-0 inset-x-0 px-4 text-xs"
        placeholder="Type your message here"
      ></input>
      {chat.map((message) => {
        return message.role === "user" ? (
          <UserMessage text={message.text} />
        ) : (
          <AIMessage text={message.text} />
        );
      })}
    </div>
  );
};

const LLMCard = () => {
    
}

const Grid = () => {
  return (
    <div className="max-w-5xl py-20 border-x  border-neutral-200 mx-auto bg-white dark:bg-neutral-800 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-y border-y border-neutral-200 divide-neutral-200">
        <Card>
          <CardHeader>
            <BrainIcon size={15} />
            <CardTitle>LLM Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>
        <Card>
          <CardHeader>
            <SquareMousePointer size={15} />
            <CardTitle>Text to workflow builder</CardTitle>
          </CardHeader>
          <CardDescription>
            Preview and debug workflow logic in a safe sandbox before deploying,
            helping you iterate with confidence.
          </CardDescription>
          <CardSkeleton className="bg-white">
            <ChatCard />
          </CardSkeleton>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <Waypoints size={15} />
            <CardTitle>Native Tools Integration</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>
      </div>
    </div>
  );
};

const CardSkeleton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-gray-50 h-60 w-full my-4 rounded-lg overflow-hidden",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
        "bg-size-[10px_10px]",
        "mask-radial-from-50%",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("bg-white p-4", className)}>{children}</div>;
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("font-medium text-lg tracking-tight", className)}>
      {children}
    </h2>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm p-2 text-neutral-400", className)}>{children}</p>
  );
};

export default Grid;
