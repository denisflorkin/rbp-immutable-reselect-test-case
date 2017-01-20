/*
 * UserProfile constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_PROFILE = 'app/ProfilePage/LOAD_PROFILE'
export const LOAD_PROFILE_SUCCESS = 'app/ProfilePage/LOAD_PROFILE_SUCCESS'
export const LOAD_PROFILE_FAIL = 'app/ProfilePage/LOAD_PROFILE_FAIL'
