const instructorReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_INSTRUCTORS":
            return action.payload;
        default:
            return state;
    }
};

// Reducer for instructors profile
export const instructorProfile = (state = [], action) => {
    switch (action.type) {
        case "SET_INSTRUCTOR_PROFILE":
            return action.payload;
        default:
            return state;
    }
}

// Reducer for recommended instructors based on gym goer tags
export const recommendInstructor = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECOMMEND_INSTRUCTOR':
            return action.payload;
        default:
            return state;
    }
}

// Reducer for favorited instructors
export const favoriteInstructor = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE_INSTRUCTOR':
            return action.payload;
        default:
            return state;
    }
}

// Reducer for instructor's classes
export const instructorClasses = (state = [], action) => {
    switch (action.type) {
        case "SET_INSTRUCTOR_CLASSES":
            return action.payload;
        default:
            return state;
    }
}

// Reducer for instructor's tags
export const instructorTags = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSTRUCTOR_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Reducer for upcoming gym goer classes that were added
export const upcomingClasses = (state = [], action) => {
    switch (action.type) {
        case "SET_GYMGOER_CLASSES":
            return action.payload
        default:
            return state;
    }
}

export default instructorReducer;

