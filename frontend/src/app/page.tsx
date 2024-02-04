import FormWrapper from "@/components/FormWrapper";
import Header from "@/components/Header";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 mx-auto w-full h-full items-center justify-center max-w-[36.25rem]">
          <FormWrapper />
      </div>
    </main>
  );
}
