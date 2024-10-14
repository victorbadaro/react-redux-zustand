import { create } from 'zustand';

interface Course {
	id: number;
	modules: Array<{
		id: number;
		title: string;
		lessons: Array<{
			id: string;
			title: string;
			duration: string;
		}>
	}>
}

interface PlayerState {
	course: Course | null;
	currentModuleIndex: number;
	currentLessonIndex: number;
	isLoading: boolean;
	play: ([moduleIndex, lessonIndex]: [number, number]) => void;
	next: () => void;
}

export const useStore = create<PlayerState>((set, get) => {
	return {
		course: null,
		currentModuleIndex: 0,
		currentLessonIndex: 0,
		isLoading: true,

		play: ([moduleIndex, lessonIndex]) => {
			set({
				currentModuleIndex: moduleIndex,
				currentLessonIndex: lessonIndex
			});
		},
		next: () => {
			const { currentModuleIndex, currentLessonIndex, course } = get();
			const nextLessonIndex = currentLessonIndex + 1;
			const nextLesson = course?.modules[currentModuleIndex].lessons[nextLessonIndex];

			if (nextLesson) {
				set({ currentLessonIndex: nextLessonIndex });
			} else {
				const nextModuleIndex = currentModuleIndex + 1;
				const nextModule = course?.modules[nextModuleIndex];

				if (nextModule) {
					set({
						currentModuleIndex: nextModuleIndex,
						currentLessonIndex: 0
					});
				}
			}
		}
	};
});
