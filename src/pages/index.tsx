import { Fragment, useState, useEffect } from "react";
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
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
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
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col h-full">
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

                <ScrollArea className="h-96 rounded-md">
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
          </div>
        </div>
        <div className="flex flex-col lg:pl-64">
          <main className="flex-1 bg-gray-100 dark:bg-neutral-900">
            <div className="">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="flex sticky top-0 z-50 rounded-none">
                  <TabsTrigger value="account">Radio</TabsTrigger>
                  <TabsTrigger value="password">Upload Music</TabsTrigger>

                  {/* <Button className="ml-auto">Login</Button> */}
                  <DropdownMenu>
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
                  </DropdownMenu>
                </TabsList>
                <TabsContent value="account">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Top Heat
                    </h1>
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
                    >
                      {people.map((person) => (
                        <li
                          key={person.email}
                          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                        >
                          <div className="flex w-full items-center justify-between space-x-6 p-6">
                            <div className="flex-1 truncate">
                              <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900">
                                  {person.name}
                                </h3>
                                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                  {person.role}
                                </span>
                              </div>
                              <p className="mt-1 truncate text-sm text-gray-500">
                                {person.title}
                              </p>
                            </div>
                            <img
                              className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                              src={person.imageUrl}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="-mt-px flex divide-x divide-gray-200">
                              <div className="flex w-0 flex-1">
                                <a
                                  href={`mailto:${person.email}`}
                                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                >
                                  <EnvelopeIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  Email
                                </a>
                              </div>
                              <div className="-ml-px flex w-0 flex-1">
                                <a
                                  href={`tel:${person.telephone}`}
                                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                >
                                  <PhoneIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  Call
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
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
                            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                          >
                            <div className="flex flex-1 flex-col p-8">
                              <img
                                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                                src={person.imageUrl}
                                alt=""
                              />
                              <h3 className="mt-6 text-sm font-medium text-gray-900">
                                {person.name}
                              </h3>
                              <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-sm text-gray-500">
                                  {person.title}
                                </dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="mt-3">
                                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                    {person.role}
                                  </span>
                                </dd>
                              </dl>
                            </div>
                            <div>
                              <div className="-mt-px flex divide-x divide-gray-200">
                                <div className="flex w-0 flex-1">
                                  <a
                                    href={`mailto:${person.email}`}
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                  >
                                    <EnvelopeIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    Email
                                  </a>
                                </div>
                                <div className="-ml-px flex w-0 flex-1">
                                  <a
                                    href={`tel:${person.telephone}`}
                                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                  >
                                    <PhoneIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    Call
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
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
                          <p className="mt-1 text-sm text-gray-600">
                            This information will be displayed publicly so be
                            careful what you share.
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                          <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                              <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                  <label
                                    htmlFor="company-website"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Website
                                  </label>
                                  <div className="mt-2 flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                                      http://
                                    </span>
                                    <input
                                      type="text"
                                      name="company-website"
                                      id="company-website"
                                      className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      placeholder="www.example.com"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="about"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  About
                                </label>
                                <div className="mt-2">
                                  <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                    placeholder="you@example.com"
                                    defaultValue={""}
                                  />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                  Brief description for your profile. URLs are
                                  hyperlinked.
                                </p>
                              </div>

                              <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                  Photo
                                </label>
                                <div className="mt-2 flex items-center">
                                  <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                    <svg
                                      className="h-full w-full text-gray-300"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                  </span>
                                  <button
                                    type="button"
                                    className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                                  >
                                    Change
                                  </button>
                                </div>
                              </div>

                              <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                  Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                  <div className="space-y-1 text-center">
                                    <svg
                                      className="mx-auto h-12 w-12 text-gray-400"
                                      stroke="currentColor"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                      <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                      >
                                        <span>Upload a file</span>
                                        <input
                                          id="file-upload"
                                          name="file-upload"
                                          type="file"
                                          className="sr-only"
                                        />
                                      </label>
                                      <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                      PNG, JPG, GIF up to 10MB
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                              <button
                                type="submit"
                                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                      <div className="border-t border-gray-200" />
                    </div>
                  </div>

                  <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                          <h3 className="text-base font-semibold leading-6 text-gray-900">
                            Personal Information
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            Use a permanent address where you can receive mail.
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                          <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                              <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Last name
                                  </label>
                                  <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                  <label
                                    htmlFor="email-address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Email address
                                  </label>
                                  <input
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="country"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Country
                                  </label>
                                  <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                  </select>
                                </div>

                                <div className="col-span-6">
                                  <label
                                    htmlFor="street-address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Street address
                                  </label>
                                  <input
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                  <label
                                    htmlFor="city"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                  <label
                                    htmlFor="region"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    State / Province
                                  </label>
                                  <input
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                  <label
                                    htmlFor="postal-code"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    ZIP / Postal code
                                  </label>
                                  <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                              <button
                                type="submit"
                                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                      <div className="border-t border-gray-200" />
                    </div>
                  </div>

                  <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                          <h3 className="text-base font-semibold leading-6 text-gray-900">
                            Notifications
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            Decide which communications you would like to
                            receive and how.
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                          <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                              <fieldset>
                                <legend className="sr-only">By Email</legend>
                                <div
                                  className="text-sm font-semibold leading-6 text-gray-900"
                                  aria-hidden="true"
                                >
                                  By Email
                                </div>
                                <div className="mt-4 space-y-4">
                                  <div className="flex items-start">
                                    <div className="flex h-6 items-center">
                                      <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      />
                                    </div>
                                    <div className="ml-3">
                                      <label
                                        htmlFor="comments"
                                        className="text-sm font-medium leading-6 text-gray-900"
                                      >
                                        Comments
                                      </label>
                                      <p className="text-sm text-gray-500">
                                        Get notified when someones posts a
                                        comment on a posting.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex h-6 items-center">
                                      <input
                                        id="candidates"
                                        name="candidates"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      />
                                    </div>
                                    <div className="ml-3">
                                      <label
                                        htmlFor="candidates"
                                        className="text-sm font-medium leading-6 text-gray-900"
                                      >
                                        Candidates
                                      </label>
                                      <p className="text-sm text-gray-500">
                                        Get notified when a candidate applies
                                        for a job.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex h-6 items-center">
                                      <input
                                        id="offers"
                                        name="offers"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      />
                                    </div>
                                    <div className="ml-3">
                                      <label
                                        htmlFor="offers"
                                        className="text-sm font-medium leading-6 text-gray-900"
                                      >
                                        Offers
                                      </label>
                                      <p className="text-sm text-gray-500">
                                        Get notified when a candidate accepts or
                                        rejects an offer.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                              <fieldset>
                                <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                                  Push Notifications
                                </legend>
                                <p className="text-sm text-gray-500">
                                  These are delivered via SMS to your mobile
                                  phone.
                                </p>
                                <div className="mt-4 space-y-4">
                                  <div className="flex items-center">
                                    <input
                                      id="push-everything"
                                      name="push-notifications"
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                      htmlFor="push-everything"
                                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Everything
                                    </label>
                                  </div>
                                  <div className="flex items-center">
                                    <input
                                      id="push-email"
                                      name="push-notifications"
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                      htmlFor="push-email"
                                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Same as email
                                    </label>
                                  </div>
                                  <div className="flex items-center">
                                    <input
                                      id="push-nothing"
                                      name="push-notifications"
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                      htmlFor="push-nothing"
                                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      No push notifications
                                    </label>
                                  </div>
                                </div>
                              </fieldset>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                              <button
                                type="submit"
                                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex justify-between bg-gray-100 dark:bg-neutral-900 w-full fixed bottom-0 left-0 py-6 px-6">
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
