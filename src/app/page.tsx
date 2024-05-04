
import ClientComponent from "~/components/ClientComponent";
import ServerComponent from "~/components/ServerComponent";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { Button } from "~/components/ui/button";
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerSession } from "next-auth";
import { auth, authOptions } from "./api/auth/[...nextauth]/route";
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "~/components/ui/resizable";
import Navbar from "~/components/navbar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import Calculators from "~/components/calculators/calculators";

// export default async function Home() {
//   const session = await getServerSession(authOptions);
//   return (
//     <main className="flex flex-col items-center justify-center w-full h-screen gap-y-5">
//       {/* <h1 className="font-bold text-xl">Welcome {session?.user?.name ?? 'Guest'}.</h1> */}
//       <code>{JSON.stringify(session)}</code>
//       <ClientComponent/>
//       <ServerComponent />
//       <ModeToggle />
//     </main>
//   );
// }

export default async function Home() {
  return (
    <>
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen max-h-screen w-screen max-w-screen"
    >

      <ResizablePanel defaultSize={15} minSize={8} className="h-screen max-w-full overflow-y-auto">
        <Navbar></Navbar>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={60} minSize={40} className="h-screen max-w-full overflow-y-auto">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
      
      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={25} minSize={10} className="h-screen max-w-full overflow-y-auto">
        <div className="flex flex-col h-full items-center justify-center p-6">
          <span className="font-semibold">Tutaj epic info</span>
          <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Calculators></Calculators>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
    </>
  );
}