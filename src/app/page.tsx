import Image from "next/image";
import NavBar from "../components/navbar";
import { Button } from "@/components/ui/button";
import { pricingCards } from "@/constants/landing-page";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4">
          <span className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm">
          An AI powered sales assistant chatbot
          </span>
          <Image
          src="/images/corinna-ai-logo.png"
          width={500}
          height={100}
          alt="Corinna AI"
          className="max-w-lg object-contain"
          />
          <p className="text-center max-w-[500px]">
            Your AI powered sales assistant! Embed Corinna AI into any website 
            with just a snippet of code
          </p>
          <Button className="bg-orange font-bold text-white px-4 hover:bg-orange/90">
            Start For Free
          </Button>
          <Image
          src="/images/iphonecorinna.png"
          width={400}
          height={100}
          alt="logo"
          className="max-w-lg object-contain"
          />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-4xl text-center">
          Choose what fits you right
        </h2>
        <p className="px-4 text-center">
          Our straightforward pricing plans are designed to fit your needs. If {"You are"} not ready to commit you can get started with our free plan.
        </p>
      </section>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
      {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2"
                  >
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Footer/>
    </main>
  );
}
