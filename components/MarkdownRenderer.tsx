"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
    markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
    return (
        <article className="max-w-none text-base leading-7">
            <ReactMarkdown
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-3xl font-bold mb-4 mt-6">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-bold mb-3 mt-5">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-xl font-bold mb-2 mt-4">
                            {children}
                        </h3>
                    ),
                    p: ({ children }) => (
                        <p className="mb-4 leading-relaxed">{children}</p>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc pl-6 mb-4">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal pl-6 mb-4">{children}</ol>
                    ),
                    li: ({ children }) => <li className="mb-1">{children}</li>,
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
                            {children}
                        </blockquote>
                    ),
                    code: ({
                        inline,
                        children,
                        ...props
                    }: {
                        inline?: boolean;
                        children?: React.ReactNode;
                    }) => {
                        return inline ? (
                            <code
                                className="bg-gray-100 rounded px-1 py-0.5 text-sm"
                                {...props}
                            >
                                {children}
                            </code>
                        ) : (
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
                                <code className="text-sm block" {...props}>
                                    {children}
                                </code>
                            </pre>
                        );
                    },
                    a: ({ children, href }) => (
                        <a
                            href={href}
                            className="text-blue-500 hover:text-blue-600 underline"
                        >
                            {children}
                        </a>
                    ),
                }}
            >
                {markdown}
            </ReactMarkdown>
        </article>
    );
};

export default MarkdownRenderer;
