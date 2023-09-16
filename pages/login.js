import Link from "next/link"

export default function Login() {
    return (
        <div class=" rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
            <img class="rounded-full h-32 w-32" src="/icon.jpeg" alt="user avatar" />
            <form method="post" class="mt-8 mb-4">
                <div class="mb-4">
                    <label for="userEmail" class="sr-only">Email address</label>
                    <input class="border-solid border border-indigo-400 rounded px-2 py-3 w-[300px] outline-indigo-700"  type="email" id="userEmail" placeholder="Email address" required />
                </div>
                <div>
                    <label for="userEmail" class="sr-only">Password</label>
                    <input class="border-solid border border-indigo-400 rounded px-2 py-3 w-[300px] outline-indigo-700" type="password" id="userPass" placeholder="Password" required />
                </div>
                <div class="my-4 flex items-center">
                    <input class="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
                    <label for="userRemember">Remember me</label>
                </div>
                <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 w-[300px]" type="submit">Sign in</button>
                <Link href="/forgotpassword"><div class="self-start mt-3 text-indigo-700">Forgot the password?</div></Link>
                <div class="self-start mt-3"><p>Don't have an account? <Link href="/signup"><span class="text-indigo-700">Create one</span></Link></p></div>
            </form>
            
        </div>
    )
}