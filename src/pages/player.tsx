import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { VideoPlayer } from '@/components/video-player';
import { useCurrentLesson, useStore } from '@/store';
import { MessageCircle } from 'lucide-react';
import { useEffect } from 'react';

export function Player() {
	const load = useStore((state) => state.load);
	const { currentLesson } = useCurrentLesson();

	useEffect(() => {
		load();
	}, [load]);

	useEffect(() => {
		if (currentLesson) {
			document.title = `Assistindo: ${currentLesson.title}`;
		}
	}, [currentLesson]);

	return (
		<div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
			<div className="flex w-[1100px] flex-col gap-6">
				<div className="flex items-center justify-between">
					<Header />

					<button type="button" className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
						<MessageCircle className="size-4" />
						Deixar feedback
					</button>
				</div>

				<main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
					<div className="flex-1">
						<VideoPlayer />
					</div>

					<Sidebar />
				</main>
			</div>
		</div>
	);
}
