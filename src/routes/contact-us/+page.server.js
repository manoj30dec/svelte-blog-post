import { fail, redirect } from "@sveltejs/kit";
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name')?.toString() || '';
        const email = data.get('email')?.toString() || '';
        const message = data.get('message')?.toString() || '';
        let errors = {}
        //fail signature fail(status, data)
        if (name.length < 3) {
            errors.name = "Name must be at least 3 charecters";
            // return fail(400, { error: 'Username must be least 3 charecters', values: { name, email } })
        }

        // Email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            errors.email = "Invalid email address";
            // return fail(400, { error: "Invalid email address", values: { name, email } })
        }
        if (message.length < 10) {
            errors.message = "Please enter at least 10 charectors";
        }
        // if any error exists
        if (Object.keys(errors).length > 0) {
            return fail(400, { errors, values: { name, email, message } })
        }
        // if everything is valid
        console.log("Form is valid", { name, email, message });
        // Redirect to thank you page with data
        throw redirect(303, `/thankyou?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
        // return { success: true }
    }
}