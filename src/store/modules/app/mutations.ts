import { MutationTree } from 'vuex';
import { AppState } from './state';

export enum AppMutationTypes {
	TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
}

export type Mutations<S = AppState> = {
	[AppMutationTypes.TOGGLE_SIDEBAR](state: S): void
}

export const mutations: MutationTree<AppState> = {
	[AppMutationTypes.TOGGLE_SIDEBAR](state: AppState) {
		state.sidebar.opened = !state.sidebar.opened
	}
}