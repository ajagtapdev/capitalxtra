import { Var, T } from "gt-next";
export default function CookiesPolicy() {
	return (
		<T id="cookies.page.0">
			<div className="container mx-auto px-4 py-32 max-w-4xl">
				<h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">
					Cookies Policy
				</h1>

				<div className="prose prose-lg prose-invert max-w-none">
					<p>
						Last updated: <Var>{new Date().toLocaleDateString()}</Var>
					</p>

					<h2>1. What Are Cookies  </h2>
					<p>
						Cookies are small text files that are placed on your device when you
						visit a website or use a mobile application. They are widely used to
						make websites and applications work more efficiently and provide
						information to the owners.
					</p>

					<h2>2. How We Use Cookies</h2>
					<p>
						capitalX uses cookies to enhance your experience, understand how
						users navigate through the application, and improve our services. We
						use both session cookies, which expire when you close the
						application, and persistent cookies, which remain on your device
						until they expire or you delete them.
					</p>

					<h2>3. Types of Cookies We Use</h2>
					<p>
						- Essential cookies: Necessary for the application to function
						properly
						<br />- Preference cookies: Remember your settings and preferences
						<br />- Analytics cookies: Help us understand how users interact
						with our application
						<br />- Marketing cookies: Track your activity to deliver
						personalized content
					</p>

					<h2>4. Managing Cookies</h2>
					<p>
						You can control and manage cookies in various ways. You can modify
						your device settings to accept or refuse cookies, delete cookies
						that have already been stored, or set up rules to manage cookies on
						a site-by-site basis.
					</p>

					<h2>5. Changes to This Policy</h2>
					<p>
						We may update our Cookies Policy from time to time. We will notify
						you of any changes by posting the new policy on this page and
						updating the &ldquo;Last updated&rdquo; date.
					</p>
				</div>
			</div>
		</T>
	);
}
