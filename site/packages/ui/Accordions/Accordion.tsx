import React from "react";

export function Accordion() {
  return (
    <div className="space-y-4 mx-auto max-w-6xl">
      <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
        <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
          What is Node.js hosting?
        </summary>
        <div className="px-4 py-2 font-body bg-white text-gray-700">
          Node.js hosting refers to a hosting service optimized for running
          Node.js applications. It provides the necessary environment and
          resources to deploy and manage Node.js projects efficiently.
        </div>
      </details>

      <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
        <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
          How do I deploy my Node.js application?
        </summary>
        <div className="px-4 py-2 font-body bg-white text-gray-700">
          To deploy your Node.js application, you typically need to upload your
          project files to the hosting server, install the necessary
          dependencies, and configure the server to run your application. Our
          open-source hosting panel and software provide detailed documentation
          to guide you through the process.
        </div>
      </details>

      <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
        <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
          What are the benefits of using your hosting service for Node.js?
        </summary>
        <div className="px-4 py-2 font-body bg-white text-gray-700">
          Our hosting service offers optimized performance, scalability, and
          security for Node.js applications. We provide easy deployment options,
          24/7 support, and a robust infrastructure to ensure your applications
          run smoothly. Additionally, our open-source hosting solution allows
          for greater flexibility and customization.
        </div>
      </details>

      <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
        <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
          Do you support frameworks like Next.js?
        </summary>
        <div className="px-4 py-2 font-body bg-white text-gray-700">
          Yes, our hosting service fully supports frameworks like Next.js. We
          provide the necessary environment and tools to deploy and manage your
          Next.js applications efficiently. Our platform is optimized for
          performance and scalability, ensuring your applications run smoothly.
          Our open-source hosting panel and software make it easy to manage your
          deployments.
        </div>
      </details>

      <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
        <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
          What is your open-source hosting panel?
        </summary>
        <div className="px-4 py-2 font-body bg-white text-gray-700">
          Our open-source hosting panel is a comprehensive solution for managing
          your hosting environment. It provides an intuitive interface for
          deploying, monitoring, and scaling your applications. With detailed
          documentation and community support, it allows for easy customization
          and integration with various tools and services.
        </div>
      </details>
    </div>
  );
}
