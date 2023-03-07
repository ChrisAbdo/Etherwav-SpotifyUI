import { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  SunIcon,
  UsersIcon,
  XMarkIcon,
  MoonIcon,
  PlayCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  ForwardIcon,
  BackwardIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
];

const people = [
  {
    name: "Jane Cooper",
    title: "0x696...69691",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "0x696...69692",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "0x696...69693",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "0x696...6969",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

const people2 = [
  {
    name: "Jane Cooper",
    title: "0x696...6969",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndexes, setHoveredIndexes] = useState([]);

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <Button
                          className="group flex justify-start rounded-md px-2 py-2 text-sm font-medium w-full"
                          variant="ghost"
                          key={item.name}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300",
                              "mr-3 h-6 w-6 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Button>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col h-full z-50">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-white dark:bg-black over">
            <div className="flex h-16 flex-shrink-0 items-center bg-white dark:bg-black px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <h1 className=" text-2xl font-bold ml-2">Etherwav</h1>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4 ">
                {navigation.map((item) => (
                  <Button
                    className="group flex justify-start rounded-md px-2 py-2 text-sm font-medium w-full"
                    variant="ghost"
                    key={item.name}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 h-6 w-6 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Button>
                ))}
                <Separator />

                <ScrollArea className="h-[35rem] rounded-md">
                  {[...Array(4)].map((_, index) => (
                    <Fragment key={index}>
                      {navigation.map((item) => (
                        <Button
                          className="group flex justify-start rounded-md px-2 py-2 text-sm font-medium w-full"
                          variant="ghost"
                          key={item.name}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300",
                              "mr-3 h-6 w-6 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Button>
                      ))}
                    </Fragment>
                  ))}
                </ScrollArea>

                <Separator />

                {/* {navigation.map((item) => (
                  <Button
                    className="group flex justify-start rounded-md px-2 py-2 text-sm font-medium w-full"
                    variant="ghost"
                    key={item.name}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 h-6 w-6 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Button>
                ))} */}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="w-full flex justify-start rounded-md px-2 py-2 text-sm font-medium"
                    >
                      <SunIcon className="w-5 h-5 mr-2" />
                      Change Theme
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        onSelect={() => {
                          setTheme("light");
                        }}
                      >
                        <SunIcon className="w-5 h-5 mr-2" />
                        <span>Light</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => {
                          setTheme("dark");
                        }}
                      >
                        <MoonIcon className="w-5 h-5 mr-2" />
                        <span>Dark</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => {
                          setTheme("system");
                        }}
                      >
                        <ComputerDesktopIcon className="w-5 h-5 mr-2" />
                        <span>System</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pl-64">
          <main className="flex-1 bg-gray-100 dark:bg-neutral-900">
            <div className="">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="flex sticky top-0 z-50 rounded-none dark:bg-neutral-900">
                  <TabsTrigger value="account">Listen</TabsTrigger>
                  <TabsTrigger value="password">Upload Music</TabsTrigger>

                  {/* <Button className="ml-auto">Login</Button> */}

                  {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="ghost" className="ml-auto">
                        <SunIcon className="w-6 h-6" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onSelect={() => {
                            setTheme("light");
                          }}
                        >
                          <SunIcon className="w-5 h-5 mr-2" />
                          <span>Light</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() => {
                            setTheme("dark");
                          }}
                        >
                          <MoonIcon className="w-5 h-5 mr-2" />
                          <span>Dark</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() => {
                            setTheme("system");
                          }}
                        >
                          <ComputerDesktopIcon className="w-5 h-5 mr-2" />
                          <span>System</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu> */}
                  <Button variant="outline" size="sm" className="ml-auto">
                    Connect Wallet
                  </Button>
                </TabsList>
                <TabsContent value="account">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                      <svg
                        className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/5 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                      >
                        <path
                          fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                          fillOpacity=".3"
                          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                          <linearGradient
                            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#9089FC" />
                            <stop offset={1} stopColor="#FF80B5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Top Heat
                    </h1>
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
                    >
                      {people.map((person, index) => (
                        <motion.li
                          key={person.email}
                          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white dark:bg-neutral-700/25 dark:hover:bg-neutral-600 shadow transition-all duration-500 z-40 border border-white dark:border-neutral-600"
                          onMouseEnter={() => {
                            const newHoveredIndexes = [...hoveredIndexes];
                            // @ts-ignore
                            newHoveredIndexes[index] = true;
                            setHoveredIndexes(newHoveredIndexes);
                          }}
                          onMouseLeave={() => {
                            const newHoveredIndexes = [...hoveredIndexes];
                            // @ts-ignore
                            newHoveredIndexes[index] = false;
                            setHoveredIndexes(newHoveredIndexes);
                          }}
                        >
                          <div className="flex items-center justify-between space-x-6 p-6">
                            <img
                              className="h-20 w-20 flex-shrink-0 rounded-md bg-gray-300 mr-6"
                              src={person.imageUrl}
                              alt=""
                            />
                            <div className="flex-1 truncate">
                              <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                  {person.name}
                                </h3>
                              </div>
                              <p className="mt-1 truncate text-sm text-gray-500 dark:text-[#eaeaea]">
                                {person.title}
                              </p>
                            </div>
                            {hoveredIndexes[index] && (
                              <motion.button
                                className="ml-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                  opacity: hoveredIndexes[index] ? 1 : 0,
                                  y: hoveredIndexes[index] ? 0 : 20,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <PlayCircleIcon className="h-12 w-12 text-gray-400" />
                              </motion.button>
                            )}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Separator />
                    </div>

                    <div className="mt-6">
                      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Explore Etherwav
                      </h1>
                      <ul
                        role="list"
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                      >
                        {people2.map((person) => (
                          <li
                            key={person.email}
                            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white dark:bg-neutral-800 dark:hover:bg-neutral-700 text-center shadow transition-all duration-500 z-40"
                          >
                            <div className="flex flex-1 flex-col p-8">
                              <img
                                className="mx-auto h-32 w-32 flex-shrink-0 rounded-md"
                                src={person.imageUrl}
                                alt=""
                              />
                              <h3 className="mt-6 text-sm font-medium text-gray-900 dark:text-white">
                                {person.name}
                              </h3>
                              <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-sm text-gray-500 dark:text-[#eaeaea]">
                                  {person.title}
                                </dd>
                              </dl>
                            </div>
                          </li>
                        ))}
                        <br />
                        <br />
                      </ul>
                    </div>
                  </div>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Your content */}
                  </div>
                </TabsContent>
                <TabsContent value="password">
                  <div>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                          <h3 className="text-base font-semibold leading-6 text-gray-900">
                            Profile
                          </h3>
                          <p className="mt-1 text-sm text-gray-600 dark:text-white">
                            This information will be displayed publicly so be
                            careful what you share.
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 md:col-span-2 md:mt-0">
                        <div>
                          <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white dark:bg-neutral-800 px-4 py-5 sm:p-6">
                              <div>
                                <div>
                                  <div className="grid w-full  items-center gap-1.5">
                                    <Label htmlFor="email">Song Title*</Label>
                                    <Input
                                      type="text"
                                      id="title"
                                      placeholder="Song Title"
                                      className="w-full"
                                      autoComplete="off"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="about"
                                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                                >
                                  Genre*
                                </label>
                                <div className="mt-2">
                                  <Select>
                                    <SelectTrigger className="">
                                      <SelectValue placeholder="Select a genre" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">
                                          Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                          Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                          Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                          Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                          Pineapple
                                        </SelectItem>
                                      </SelectGroup>
                                      <SelectSeparator />
                                      <SelectGroup>
                                        <SelectLabel>Vegetables</SelectLabel>
                                        <SelectItem value="aubergine">
                                          Aubergine
                                        </SelectItem>
                                        <SelectItem value="broccoli">
                                          Broccoli
                                        </SelectItem>
                                        <SelectItem value="carrot" disabled>
                                          Carrot
                                        </SelectItem>
                                        <SelectItem value="courgette">
                                          Courgette
                                        </SelectItem>
                                        <SelectItem value="leek">
                                          Leek
                                        </SelectItem>
                                      </SelectGroup>
                                      <SelectSeparator />
                                      <SelectGroup>
                                        <SelectLabel>Meat</SelectLabel>
                                        <SelectItem value="beef">
                                          Beef
                                        </SelectItem>
                                        <SelectItem value="chicken">
                                          Chicken
                                        </SelectItem>
                                        <SelectItem value="lamb">
                                          Lamb
                                        </SelectItem>
                                        <SelectItem value="pork">
                                          Pork
                                        </SelectItem>
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                  Cover Photo*
                                </label>
                                <div className="mt-2 flex items-center">
                                  {/* <Button
                                    variant="subtle"
                                    className="w-full rounded-md py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                                  >
                                    Choose Cover Photo
                                    <input type="file" className="" />
                                  </Button> */}
                                  <input
                                    type="file"
                                    className="file:rounded-md"
                                    onInput={(e) => {
                                      // @ts-ignore
                                      setImageFile(e.target.files[0]);
                                    }}
                                  />
                                </div>
                                {imageFile && (
                                  <img
                                    src={URL.createObjectURL(imageFile)}
                                    alt="cover"
                                    className="w-64 h-64 rounded-md mt-2"
                                  />
                                )}
                              </div>

                              <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                  Audio File*
                                </label>
                                <div className="mt-2">
                                  {/* <Button
                                    variant="subtle"
                                    className=" w-full text-left"
                                  >
                                    Choose Audio File
                                  </Button> */}
                                  <input
                                    type="file"
                                    className="file:rounded-md"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="dark:bg-neutral-700 bg-gray-100 px-4 py-3 sm:px-6">
                              <Button variant="default" className="w-full">
                                Upload Song to Etherwav
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="flex justify-between bg-gray-100 dark:bg-neutral-900 w-full fixed bottom-0 left-0 py-5 px-5 z-50">
              <div className="flex items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/66892203?v=4"
                  alt=""
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Dashboard
                  </h1>
                  <p className="text-sm dark:text-zinc-500">Dashboard</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between space-x-4">
                  <BackwardIcon className="h-9 w-9" aria-hidden="true" />
                  <PlayCircleIcon className="h-9 w-9" aria-hidden="true" />
                  <ForwardIcon className="h-9 w-9" aria-hidden="true" />
                </div>
                <Progress className="w-64 lg:w-96" value={95} />
              </div>

              {/* hidden on everything but lg screen */}
              <div className="hidden lg:flex items-center space-x-4">
                <PlayCircleIcon
                  onClick={() => {
                    console.log("play");
                  }}
                  className="h-12 w-12"
                  aria-hidden="true"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
