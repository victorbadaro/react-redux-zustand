import { ChevronDown, Video } from 'lucide-react';

export function SkeletonSidebarLoader() {
	return (
		<aside className="w-80 absolute top-0 right-0 bottom-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 animate-pulse">
			<button type="button" className="flex w-full items-center gap-3 bg-zinc-800 p-4">
				<div className="size-10 rounded-full bg-zinc-500" />
				<div className="flex flex-col gap-1 text-left">
					<strong className="w-40 h-2 rounded bg-zinc-400" />
					<span className="w-10 h-2 rounded bg-zinc-700" />
				</div>
				<ChevronDown className="size-5 ml-auto text-zinc-600" />
			</button>

			<div>
				<button type="button" className="flex w-full items-center gap-3 bg-zinc-800 p-4">
					<div className="size-10 rounded-full bg-zinc-500" />
					<div className="flex flex-col gap-1 text-left">
						<strong className="w-36 h-2 rounded bg-zinc-400" />
						<span className="w-10 h-2 rounded bg-zinc-700" />
					</div>
					<ChevronDown className="size-5 ml-auto text-zinc-600 rotate-180" />
				</button>
				<nav className="relative flex flex-col gap-4 p-6">
					<button type="button" className="flex items-center gap-3">
						<Video className="size-4 text-zinc-700" />
						<span className="w-20 h-2 rounded bg-zinc-700" />
						<span className="ml-auto w-10 h-2 rounded bg-zinc-700" />
					</button>
					<button type="button" className="flex items-center gap-3">
						<Video className="size-4 text-zinc-500" />
						<span className="w-40 h-2 rounded bg-zinc-500" />
						<span className="ml-auto w-10 h-2 rounded bg-zinc-500" />
					</button>
					<button type="button" className="flex items-center gap-3">
						<Video className="size-4 text-zinc-700" />
						<span className="w-36 h-2 rounded bg-zinc-700" />
						<span className="ml-auto w-10 h-2 rounded bg-zinc-700" />
					</button>
				</nav>
			</div>

			<div>
				<button type="button" className="flex w-full items-center gap-3 bg-zinc-800 p-4">
					<div className="size-10 rounded-full bg-zinc-500" />
					<div className="flex flex-col gap-1 text-left">
						<strong className="w-20 h-2 rounded bg-zinc-400" />
						<span className="w-10 h-2 rounded bg-zinc-700" />
					</div>
					<ChevronDown className="size-5 ml-auto text-zinc-600 rotate-180" />
				</button>

				<nav className="relative flex flex-col gap-4 p-6">
					<button type="button" className="flex items-center gap-3">
						<Video className="size-4 text-zinc-700" />
						<span className="w-36 h-2 rounded bg-zinc-700" />
						<span className="ml-auto w-10 h-2 rounded bg-zinc-700" />
					</button>
					<button type="button" className="flex items-center gap-3">
						<Video className="size-4 text-zinc-700" />
						<span className="w-20 h-2 rounded bg-zinc-700" />
						<span className="ml-auto w-10 h-2 rounded bg-zinc-700" />
					</button>
					<button type="button" className="flex items-center gap-3">
						<Video className="size-4 text-zinc-700" />
						<span className="w-40 h-2 rounded bg-zinc-700" />
						<span className="ml-auto w-10 h-2 rounded bg-zinc-700" />
					</button>
				</nav>
			</div>
		</aside>
	);
}
