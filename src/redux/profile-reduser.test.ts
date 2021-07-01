import {addPostActionCreator, deletePost, profileReducer} from "./profile-reduser";

let state = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 10},
        {id: 2, message: 'its my first post', likesCount: 18},
        {id: 3, message: 'i knows it', likesCount: 9}
    ],
    newPostText: "",
    profile: null,
    status: ""
}

it('new post', () => {
    // 1 test data
    const action = addPostActionCreator('hello')

    // 2 action
    const newState = profileReducer(state, action)

    // 3 expectation
    expect(newState.posts.length).toBe(4)
})

it('message of new post correct', () => {
    // 1 test data
    const action = addPostActionCreator('hello')

    // 2 action
    const newState = profileReducer(state, action)

    // 3 expectation
    expect(newState.posts[3].message).toBe('hello')
})
it('after deleting length of message should be decrement', () => {
    // 1 test data
    const action = deletePost(1)

    // 2 action
    const newState = profileReducer(state, action)

    // 3 expectation
    expect(newState.posts.length).toBe(2)
})
it('after deleting length of message should be decrement if id is incorrect', () => {
    // 1 test data
    const action = deletePost(100)

    // 2 action
    const newState = profileReducer(state, action)

    // 3 expectation
    expect(newState.posts.length).toBe(3)
})