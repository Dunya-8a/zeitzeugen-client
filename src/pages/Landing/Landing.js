import React from "react";

// COMPONENTS
import SignUpHeader from "../../components/SignUpHeader";
import Footer from "../../components/Footer";

const Landing = () => {
	return (
		<>
			<SignUpHeader />
			<div>
				<h1>Zeitzeugen</h1>
				<p>Life is short and we never know when each of us will leave.</p>
				<p>Our life stories are unique, but volatile.</p>
				<p>In collective memory, however, we live eternally.</p>
				<p>
					With zeitzeugen, we want to collect the life stories of people of all
					kinds, and store them for future generations.
				</p>
				<p>
					Do you have a loved one, friend, mentor or acquaintance that you’d not
					like to be forgotten? Who you’d like to live on in collective memory,
					for your (grand-)children to meet and yourself to remember?
				</p>
				<p>
					Then join our forces. Equipped with your smartphone, camera or voice
					recorder, arrange a time to interview your chosen person. You can use
					one of our question templates or come up with your own questions.
				</p>
				<p>
					Upload the video to zeitzeugen. We will upload it to the
					Interplanetary File System, a decentralized, censorship-resistant
					store of data that can be accessed by anyone, forever.
				</p>
				<p>They shall not be forgotten.</p>
			</div>
		</>
	);
	<Footer />;
};

export default Landing;
