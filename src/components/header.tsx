import { useAppSelector, useCurrentLesson } from '@/store';

export function Header() {
	const { currentModule, currentLesson } = useCurrentLesson();
	const isCourseLoading = useAppSelector(state => state.player.isLoading);

	if (isCourseLoading) {
		<h1 className="text-2xl font-bold">Carregando...</h1>;
	}

	return (
		<div className="flex flex-col gap-1">
			<h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
			<span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
		</div>
	);
}
