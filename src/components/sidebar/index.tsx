import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "../ui/button"
import { PanelBottom, Package, Home, UserRound , Activity , ListOrdered, ListPlus  , UserPlus, Lock   } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">

            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:px-6 sm:static sm:h-auto sm:border-0 sm:bg-transparent">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5" />
                                <span className="sr-only">Abrir / fechar menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent className="xm:max-w-x">
                            <nav className="grid gap-10 text-lg font-medium">
                                <Link href="#" className="flex h-10 w-10 gap-2 bg-primary rounded-full text-lg items-center text-primary-foreground md:text-base justify-center" prefetch={false}>
                                    <Package className="w-5 h-5 transition-all" />
                                    <span className="sr-only">Logo do projeto</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <Home className="w-5 h-5 transition-all" />
                                    Início
                                </Link>
                                {/* <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <UserRound  className="w-5 h-5 transition-all" />
                                    Pessoas
                                </Link>
                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <Activity className="w-5 h-5 transition-all" />
                                    Atividades
                                </Link> */}
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger><span><UserRound  /></span>Pessoas</AccordionTrigger>
                                        <AccordionContent>
                                            <nav className="grid pl-7 gap-4 text-base font-medium">
                                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                                    <ListOrdered   className="w-5 h-5 transition-all" />
                                                    Todas Pessoas
                                                </Link>
                                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                                    <UserPlus  className="w-5 h-5 transition-all" />
                                                    Cadastrar Pessoas
                                                </Link>
                                            </nav>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger><span><Activity /></span>Atividades</AccordionTrigger>
                                        <AccordionContent>
                                            <nav className="grid pl-7 gap-4 text-base font-medium">
                                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                                    <ListOrdered className="w-5 h-5 transition-all" />
                                                    Todas Atividades
                                                </Link>
                                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                                    <ListPlus  className="w-5 h-5 transition-all" />
                                                    Cadastrar Atividade
                                                </Link>
                                            </nav>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger><span><Lock /></span>Admin</AccordionTrigger>
                                        <AccordionContent>
                                            <nav className="grid pl-7 gap-6 text-base font-medium">
                                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                                    <UserRound  className="w-5 h-5 transition-all" />
                                                    Todos Usuários
                                                </Link>
                                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                                    <UserRound  className="w-5 h-5 transition-all" />
                                                    Cadastrar Usuário
                                                </Link>
                                            </nav>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
        </div>
    )
}

