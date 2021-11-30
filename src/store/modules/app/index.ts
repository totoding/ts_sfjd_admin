import { mutations, Mutations } from './mutations';
import { RootState } from './../../index';
import { state } from './state';
import type { AppState } from './state'
import { Store as VuexStore, CommitOptions, Module } from 'vuex'

export { AppState }

export type AppStore<S = AppState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
	& {
		commit<K extends keyof Mutations, P>(
			key: K,
			payload?: P,
			options?: CommitOptions
		): ReturnType<Mutations[K]>
	}

export const store: Module<AppState, RootState> = {
	state,
	mutations
}