import { useAppDispatch, useAppSelector, useCurrentLesson } from '@/store';
import { next } from '@/store/slices/player';
import { Loader } from 'lucide-react';
import ReactPlayer from 'react-player';

export function VideoPlayer() {
	const dispatch = useAppDispatch();
	const { currentLesson } = useCurrentLesson();
	const isCourseLoading = useAppSelector(state => state.player.isLoading);

	function handlePlayNext() {
		dispatch(next());
	}

	return (
		<div className="w-full bg-zinc-950 aspect-video">
			{isCourseLoading ? (
				<div className="flex h-full items-center justify-center">
					<Loader className="size-6 text-zinc-400 animate-spin" />
				</div>
			) : (
				<ReactPlayer
					width="100%"
					height="100%"
					controls
					playing
					onEnded={handlePlayNext}
					url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
				/>
			)}
		</div>
	);
}
