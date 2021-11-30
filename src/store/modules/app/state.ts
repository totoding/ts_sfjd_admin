/**
 * @description： app state
 * @author； ZM
 * @LastEditor: ZM
 * @LastEditTime:
 */

export interface AppState {
	sidebar: {
		opened: boolean
	}
}

export const state: AppState = {
	sidebar: {
		opened: false
	}
}