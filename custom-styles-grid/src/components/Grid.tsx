import type React from "react";
import { cn } from "../utils/utils";
import {
  AppWindowMac,
  BrainIcon,
  SquareMousePointer,
  Waypoints,
} from "lucide-react";
import ClaudeIcon from "../icons/claude-transparent-custom.png";
import ChatGPTIcon from "../icons/63c52af590250dd34bd6a9ab.png";
import MetaIcon from "../icons/61fae2f695e6ca00047b4f13.png";

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
      <div className="flex justify-end items-center gap-2 bg-blue-500 rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-lg py-2 px-4 w-fit ml-auto">
        <p className="text-sm text-white">{text}</p>
        <div className="rounded-full shrink-0 size-4 bg-linear-to-r from-blue-400 to-purple-500" />
      </div>
    );
  };

  const AIMessage = ({ text }: { text: string }) => {
    return (
      <div className="flex justify-start items-center gap-2 bg-gray-100 rounded-tr-full rounded-tl-full rounded-bl-lg rounded-br-full w-fit mr-auto py-2 px-4">
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
  return (
    <div className="h-full w-full grid grid-cols-1 bg-white relative z-20">
      <div className="h-16 w-30 rounded-md divide-y divide-neutral-300 bg-white border border-neutral-200 shadow-2xs absolute right-2">
        <div className="py-1 px-2 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <img className="h-3 w-3" src={ChatGPTIcon} alt="chatgpt-icon"></img>
            <p className="text-[10px]">Open AI</p>
          </div>
          <p className="text-neutral-500 text-[10px]">GPT 5</p>
        </div>
        <div className="flex justify-start p-2 pt-2.5 items-center">
          <div className="bg-blue-50 border border-blue-500 px-2 rounded-sm ">
            <p className="text-blue-500 text-[12px]">Connected</p>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col gap-2 shadow-x shadow-2xl p-4 mt-8 w-[calc(100%-6rem)] mx-auto border-y border-neutral-200 rounded-t-2xl bg-white">
        <div className="flex gap-2">
          <div className="bg-red-500 rounded-full h-3 w-3"></div>
          <div className="bg-green-500 rounded-full h-3 w-3"></div>
          <div className="bg-yellow-500 rounded-full h-3 w-3"></div>
        </div>
        <div className="flex mt-6 justify-start items-center gap-2">
          <AppWindowMac size={15} />
          <p>All Models</p>
          <p className="bg-gray-100 mt-0.5 border border-gray-200 px-2 rounded-xl text-[12px]">
            69,420
          </p>
        </div>
        <div className="w-full h-px bg-gray-100"></div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex justify-start gap-1 items-center">
              <img className="h-7 w-7" src={ClaudeIcon} alt="claude-icon"></img>
              <p className="text-sm">Claude 4 Opus</p>
            </div>
            <div className="bg-red-50 border border-red-500 px-2 rounded-sm ">
              <p className="text-red-500 text-[12px]">Unavailable</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex ml-1.5 justify-start gap-2 items-center">
              <img
                className="h-4 w-4"
                src={ChatGPTIcon}
                alt="claude-icon"
              ></img>
              <p className="text-sm">ChatGPT</p>
            </div>
            <div className="bg-green-50 border border-green-500 px-2 rounded-sm ">
              <p className="text-green-500 text-[12px]">Connected</p>
            </div>
          </div>
          <div className="flex justify-between mt-1 items-center">
            <div className="flex ml-0.5 justify-start gap-2 items-center">
              <img className="h-3 w-6" src={MetaIcon} alt="claude-icon"></img>
              <p className="text-sm">Llama 3.2</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-500 px-2 rounded-sm ">
              <p className="text-yellow-500 text-[12px]">Waiting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



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
          <CardSkeleton className="mask-radial-from-100%">
            <LLMCard />
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
          <CardSkeleton>
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
