import {
  Accordion,
  Badge,
  BasicCard,
  Button,
  H1,
  H2,
  H3,
  H4,
  Input,
  Textarea,
} from "@/packages/ui";
import { GithubIcon, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-36">
        <section className="container max-w-6xl mx-auto px-4 lg:px-0 mt-36 text-gray-900 flex justify-center items-center">
          <div className="text-center lg:text-left w-full lg:w-2/3">
            <H1>Make your projects</H1>
            <H1 className="text-outlined">seen by people!</H1>

            <p className="text-lg text-muted mb-8 mt-4">
              We are a hosting platform that allows you to showcase your
              projects to the world. With a simple and easy-to-use interface,
              you can deploy your projects in minutes.
            </p>

            <div className="max-w-96 grid gap-4 grid-cols-2 mx-auto lg:mx-0">
              <Link href="/docs" passHref>
                <Button
                  className="w-full"
                  aria-label="Get Started with RetroUI"
                >
                  Get Started
                </Button>
              </Link>
              <Link
                href="https://github.com/ariflogs/retroui"
                target="_blank"
                passHref
              >
                <Button
                  className="w-full"
                  variant="outline"
                  aria-label="Get Started with RetroUI"
                >
                  Github
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <img
              alt="dev cat"
              src="/images/coder-kitty.png"
              className="h-full w-full"
            />
          </div>
        </section>
        <section className="container max-w-6xl mx-auto border-2 bg-primary-400 border-black py-16 px-4 lg:p-16">
          <H2 className="mb-16 text-center">Top Features 👀</H2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            <div className="space-y-4">
              <H3>Load Balancing ⚖️</H3>
              <p className="text-lg text-muted">
                Ensure high availability and reliability with our advanced load
                balancing features. Distribute traffic evenly across your
                servers to prevent overload and maintain optimal performance.
              </p>
            </div>
            <div className="space-y-4">
              <H3>High Efficiency ⚡</H3>
              <p className="text-lg text-muted">
                Experience blazing fast performance with our optimized hosting
                solutions. Our infrastructure is designed to handle high traffic
                with minimal latency, ensuring your projects run smoothly and
                efficiently.
              </p>
            </div>
            <div className="space-y-4">
              <H3>CI/CD Pipeline 🔄</H3>
              <p className="text-lg text-muted">
                Seamlessly integrate with your Git repositories to enable
                continuous integration and continuous deployment (CI/CD).
                Automate your build, test, and deployment processes to ensure
                your projects are always up-to-date and running smoothly.
              </p>
            </div>
          </div>
        </section>
        <section className="container max-w-6xl mx-auto px-4 lg:px-0">
          <H2 className="mb-8 text-center">How are we different? 🙌</H2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            <div className="space-y-4">
              <H3>Developer Friendly 🧑‍💻</H3>
              <p className="text-lg text-muted">
                Our platform is designed with developers in mind. We provide
                intuitive tools and features to streamline your workflow and
                make deployment a breeze. Focus on your code, and let us handle
                the rest.
              </p>
            </div>
            <div className="space-y-4">
              <H3>Rate Limiters 🛡️</H3>
              <p className="text-lg text-muted">
                Unlike other serverless platforms, we provide rate limiters and
                specific plans to ensure you don't overspend. Our platform is
                designed to keep everything simple and easy to use, allowing you
                to focus on your projects without worrying about unexpected
                costs.
              </p>
            </div>
            <div className="space-y-4">
              <H3>Secure & Reliable 🔒</H3>
              <p className="text-lg text-muted">
                Trust your projects to our secure and reliable platform. We
                employ the latest security measures to protect your data and
                ensure uptime. Rest easy knowing your projects are in good
                hands.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-4 lg:px-0">
          <H2 className="text-center mb-8">Pricing</H2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-4 p-10">
            <BasicCard className="flex flex-col items-center">
              <H3>Starter</H3>
              <p className="text-lg mb-4">$5/month</p>
              <ul className="list-none space-y-2 mb-4">
                <li>✅ 1 Project</li>
                <li>✅ 500MB Ram</li>
                <li>✅ 1 CPU</li>
                <li>✅ 5GB Storage</li>
                <li>✅ Community Access</li>
                <li>✅ Custom Domain</li>
                <li>❌ Basic Support</li>
                <li>❌ Limited Bandwidth</li>
              </ul>
              <Button className="mt-4">Get Started</Button>
            </BasicCard>
            <BasicCard className="flex flex-col items-center">
              <H3>Pro</H3>
              <p className="text-lg mb-4">$10/month</p>
              <ul className="list-none space-y-2 mb-4">
                <li>✅ 5 Projects</li>
                <li>✅ 2GB Ram</li>
                <li>✅ 2 CPUs</li>
                <li>✅ 10GB Storage</li>
                <li>✅ Priority Support</li>
                <li>✅ Community Access</li>
                <li>✅ Custom Domain</li>
                <li>❌ Limited Bandwidth</li>
              </ul>
              <Button className="mt-4">Get Started</Button>
            </BasicCard>
            <BasicCard className="flex flex-col items-center">
              <H3>Enterprise</H3>
              <p className="text-lg mb-4">$100/month</p>
              <ul className="list-none space-y-2 mb-4">
                <li>✅ Unlimited Projects</li>
                <li>✅ 8GB Ram</li>
                <li>✅ 4 CPUs</li>
                <li>✅ 100GB Storage</li>
                <li>✅ 24/7 Support</li>
                <li>✅ Community Access</li>
                <li>✅ Custom Domain</li>
                <li>✅ Unlimited Bandwidth</li>
              </ul>
              <Button className="mt-4">Get Started</Button>
            </BasicCard>
            <BasicCard className="flex flex-col items-center">
              <H3>Custom</H3>
              <p className="text-lg mb-4">Contact us for pricing</p>
              <ul className="list-none space-y-2 mb-4">
                <li>✅ Tailored Solutions</li>
                <li>✅ Dedicated Support</li>
                <li>✅ Custom Resources</li>
                <li>✅ SLA Guarantee</li>
                <li>✅ Community Access</li>
                <li>✅ Custom Domain</li>
                <li>✅ Unlimited Bandwidth</li>
                <li>✅ High Storage</li>
              </ul>
              <Button className="mt-4">Contact Us</Button>
            </BasicCard>
          </div>
        </section>
        <section className="container max-w-6xl mx-auto p-10 border-2 border-black shadow-md cursor-pointer transition-all hover:shadow-xs">
          <H2 className="mb-16 text-center">Why Choose Us? 🤔</H2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/setup.png"
                  alt="Easy Setup"
                  width={50}
                  height={30}
                />
                <H3>Easy Setup 🛠️</H3>
              </div>
              <p className="text-lg text-muted">
                Get your projects up and running in no time with our intuitive
                setup process. Our platform is designed to be user-friendly,
                allowing you to deploy your applications with just a few clicks.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/scalability.png"
                  alt="Scalability"
                  width={50}
                  height={30}
                />
                <H3>Scalability 📈</H3>
              </div>
              <p className="text-lg text-muted">
                Scale your projects effortlessly with our robust infrastructure.
                Whether you're starting small or growing rapidly, our platform
                can handle your needs with ease.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/migration.png"
                  alt="Easy Migration"
                  width={50}
                  height={30}
                />
                <H3>Easy Migration 🚚</H3>
              </div>
              <p className="text-lg text-muted">
                Seamlessly migrate your existing projects to our platform with
                minimal effort. Our migration tools and support team ensure a
                smooth transition, so you can focus on what matters most.
              </p>
            </div>
          </div>
        </section>
        <section className="container max-w-6xl mx-auto border-2 bg-primary-400 border-black py-16 px-4 lg:p-16">
          <H2 className="mb-8 text-center">
            Did I mention it&apos;s Free for self hosting annnnnnd Open Source?
            🤯
          </H2>
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
            <Link
              href="https://github.com/ariflogs/retroui"
              target="_blank"
              passHref
            >
              <Button className="flex items-center bg-white" variant="outline">
                <GithubIcon size="16" className="mr-2" />
                Star on GitHub
              </Button>
            </Link>
          </div>
        </section>
        <section className="container max-w-6xl mx-auto px-4 lg:px-0">
          <H2 className="mb-8 text-center">FAQs</H2>
          <div className="space-y-4 mx-auto max-w-6xl">
            <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
              <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
                How do I deploy my Node.js or Bun application?
              </summary>
              <div className="px-4 py-2 font-body bg-white text-gray-700">
                To deploy your Node.js application, you typically need to upload
                your project files to the hosting server, install the necessary
                dependencies, and configure the server to run your application.
                Our open-source hosting panel and software provide detailed
                documentation to guide you through the process.
              </div>
            </details>

            <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
              <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
                What are the benefits of using your hosting service for Node.js
                or Bun?
              </summary>
              <div className="px-4 py-2 font-body bg-white text-gray-700">
                Our hosting service offers optimized performance, scalability,
                and security for Node.js applications. We provide easy
                deployment options, 24/7 support, and a robust infrastructure to
                ensure your applications run smoothly. Additionally, our
                open-source hosting solution allows for greater flexibility and
                customization.
              </div>
            </details>

            <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
              <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
                Do you support frameworks like Next.js?
              </summary>
              <div className="px-4 py-2 font-body bg-white text-gray-700">
                Yes, our hosting service fully supports frameworks like Next.js.
                We provide the necessary environment and tools to deploy and
                manage your Next.js applications efficiently. Our platform is
                optimized for performance and scalability, ensuring your
                applications run smoothly. Our open-source hosting panel and
                software make it easy to manage your deployments.
              </div>
            </details>

            <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
              <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
                What is your open-source hosting panel?
              </summary>
              <div className="px-4 py-2 font-body bg-white text-gray-700">
                Our open-source hosting panel is a comprehensive solution for
                managing your hosting environment. It provides an intuitive
                interface for deploying, monitoring, and scaling your
                applications. With detailed documentation and community support,
                it allows for easy customization and integration with various
                tools and services.
              </div>
            </details>
            <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
              <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
                Can I use a custom domain with your hosting service?
              </summary>
              <div className="px-4 py-2 font-body bg-white text-gray-700">
                Yes, you can use a custom domain with our hosting service. We
                provide easy-to-follow instructions to help you set up your
                custom domain and ensure it points to your hosted application.
              </div>
            </details>

            <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
              <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
                What kind of support do you offer?
              </summary>
              <div className="px-4 py-2 font-body bg-white text-gray-700">
                We offer various levels of support depending on your plan. Our
                support includes community access, priority support for Pro
                users, and 24/7 dedicated support for Enterprise users. Our team
                is always ready to assist you with any issues or questions you
                may have.
              </div>
            </details>

            <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
              <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
                How do I monitor the performance of my applications?
              </summary>
              <div className="px-4 py-2 font-body bg-white text-gray-700">
                Our hosting platform includes built-in monitoring tools that
                allow you to track the performance of your applications. You can
                view metrics such as CPU usage, memory usage, and response times
                to ensure your applications are running optimally.
              </div>
            </details>
          </div>
        </section>

        <footer className="bg-black py-8">
          <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center">
            <div className="flex justify-center space-x-4">
              <a
                href="https://twitter.com/ariflogs"
                className="text-primary-500"
              >
                Twitter
              </a>
              <a
                href="https://github.com/ariflogs/retroui"
                className="text-primary-500"
              >
                GitHub
              </a>
              <a href="/docs" className="text-primary-500">
                Documentation
              </a>
            </div>

            <p className="text-gray-300 text-sm">
              Made with ❤️ by{" "}
              <a href="https://mrdsa.dev" className="text-primary-500">
                Dewan Shakil
              </a>{" "}
              using{" "}
              <a href="https://retroui.dev" className="text-primary-500">
                Retro UI
              </a>{" "}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
