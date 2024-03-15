import { ThemeToggle } from "@/components/theme-toggle";
import { Notifications } from "@/components/notifications";
import { WalletConnect } from "@/components/walletconnect";
import { MetaMaskRequests } from "./metamask-requests";

export function RightSidebar() {
    return (
        <div className="md:flex flex-row top-0 fixed right-0 min-h-screen w-20 hidden">
            <div className="w-20 min-h-screen flex flex-col gap-4 overflow-scroll no-scrollbar h-screen pt-16 justify-between bg-card">
                <div>
                    <Notifications />
                    <MetaMaskRequests />
                    <WalletConnect />
                </div>
                <ThemeToggle />
            </div>
        </div>
    );
}
