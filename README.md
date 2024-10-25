# Personal Portfolio Project

This portfolio project showcases my professional journey and projects with an interactive and visually engaging web experience. It is built using a modern tech stack that includes Vite, React, TypeScript, TailwindCSS, Node.js, AWS DynamoDB, ESLint, and Framer Motion for seamless animations and styling. The portfolio is designed to highlight different aspects of my experience and skills in a responsive and dynamic format.

## Tech Stack

### Front end
- [x] **Vite**
- [x] **React**
- [x] **TypeScript**
- [x] **TailwindCSS**

### Backend
- [x] **Node.js**
- [x] **AWS DynamoDB**

### Tools and Libraries
- [x] **ESLint**
- [x] **Framer Motion**
- [x] **MaterialUI**

## Project Sections

### 1. Starfield - `Space.tsx`
   The **Starfield** section is an animated background feature that provides a visually dynamic, immersive experience as the user navigates the portfolio. Using **Framer Motion**, this component brings depth and interactivity, simulating a starry space field with smooth transitions and subtle movement effects that respond to user input.

   **Key Highlights**:
   - **Animations**: Framer Motion powers the star animation with initial opacity and transition effects to achieve a floating star-like experience.
   - **Responsiveness**: Adapts seamlessly across screen sizes to maintain visual consistency.
   - **Interactivity**: Adds life to the background, keeping the page visually engaging without overwhelming the foreground content.

### 2. Resume - `Certifications.tsx`, `Experience.tsx`, `ProjectItem.tsx`, `Projects.tsx`
   The **Resume** section provides a detailed view of my professional background and credentials, including Certifications, Work Experience, and Project showcases.

   - **Certifications.tsx**: Uses `Framer Motion` and `React Intersection Observer` to animate certification entries, creating smooth entry effects as users scroll.
   - **Experience.tsx**: Lists past job experiences, including role descriptions and responsibilities. **Framer Motion** brings in animation effects as each job entry fades in when it comes into view, enhancing user engagement.
   - **Projects.tsx and ProjectItem.tsx**: Pulls project data from **AWS DynamoDB** and dynamically displays it. Each project has an interactive card format with hover effects, making it easy for users to explore my portfolio.

   **Key Highlights**:
   - **AWS DynamoDB Integration**: Project data is fetched from DynamoDB, sorted by priority, and displayed in a responsive grid format.
   - **Interactive Cards**: Hover animations and clickable project cards lead users to live project links.
   - **Smooth Animations**: Framer Motion ensures a polished user experience with fading and scrolling effects.

### 3. About Me - `Me.tsx`
   The **About Me** section introduces my personality, tech interests, and hobbies, using images and text to connect with viewers on a more personal level.

   - **Hobbies and Interests**: The section features images of activities and interests to create a genuine, friendly interaction point.
   - **Animated Photo Gallery**: Framer Motion adds movement to the images, which fade in and rearrange smoothly as users scroll.
   - **Storytelling**: Through concise paragraphs and animated transitions, this section creates an inviting atmosphere for visitors to learn more about me beyond my professional profile.

   **Key Highlights**:
   - **Framer Motion for Photo Transitions**: Engaging visuals are supported by animated effects that enhance user interaction and give personality to the portfolio.
   - **Responsive Design**: The layout adapts across devices, ensuring that images and text remain organized and aesthetically pleasing on any screen size.

## If You'd Like to Run it Locally:
To run the project locally, make sure to set up environment variables for AWS DynamoDB access and install all dependencies.

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```

### Environment Variables

Define the following environment variables for AWS DynamoDB:

- `VITE_AWS_REGION`
- `VITE_AWS_ACCESS_KEY_ID`
- `VITE_AWS_SECRET_ACCESS_KEY`

