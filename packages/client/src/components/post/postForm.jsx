import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

const PostForm = ({
  buttonTitle,
  onSubmit,
  postData = { title: "", content: "" },
}) => {
  const [title, setTitle] = useState(postData.title);
  const [content, setContent] = useState(postData.content);
  const [errors, setErrors] = useState({});

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const validate = () => {
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!content) errors.content = "content is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit({ title, content });
    }
  };

  useEffect(() => {
    setTitle(postData.title);
    setContent(postData.content);
  }, [postData.title, postData.content]);

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        <span className="text-[#0040a6]">SoftMind</span>
        <span className="text-[#11bc86]"> Solutions </span>
        Blog
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {buttonTitle}, it's time to show your writing skills
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Why Soft Mind Solutions is Your Go-To Software Development Partner"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="content">Content</Label>
          <Input
            id="content"
            placeholder="At Soft Mind Solutions, we believe in turning ideas into reality through innovative software development. Our team of experts is dedicated to providing customized solutions that cater to your business needs, ensuring scalability, performance, and seamless user experience. Whether you're a startup or an established enterprise, we’re here to help you achieve your goals."
            onChange={(e) => setContent(e.target.value)}
            textArea={true}
            cols="50"
            rows="8"
          >
            {content}
          </Input>
          {errors.content && <p style={{ color: "red" }}>{errors.content}</p>}
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {buttonTitle} &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );

  return (
    <div>
      <h1>{pageTitle}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
        </div>
        <div>
          <label>content:</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors.content && <p style={{ color: "red" }}>{errors.content}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default PostForm;
