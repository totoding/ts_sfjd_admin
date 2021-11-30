
import { createStore, createLogger } from 'vuex'
import { store as app, AppStore, AppState } from '@/store/modules/app'


export interface RootState {
	app: AppState
}


const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
export type Store = AppStore<Pick<RootState, 'app'>>

export const store = createStore({
	plugins,
	modules: {
		app,
	}
})

export function useStore(): Store {
	return store as Store
}
