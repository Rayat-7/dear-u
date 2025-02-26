import React from "react";
import { SignupForm } from "@/components/ui/signup-form";

export default function SignupFormDemo() {
  return (
    <div className=" flex p-12 items-center justify-center bg-rose-50">
      <SignupForm />
    </div>
  );
}











// 'use client';

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useState } from "react";
// import { FaUser, FaLock } from "react-icons/fa";

// export default function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = () => {
//     // Handle authentication logic here
//     console.log("Sign In with", { email, password });
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gradient-to-br from-rose-500 to-white">
//       <Card className="w-full max-w-md shadow-xl">
//         <CardHeader>
//           <CardTitle className="text-center text-2xl font-bold">Sign In</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="relative">
//               <FaUser className="absolute left-3 top-3 text-gray-400" />
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
//             <div className="relative">
//               <FaLock className="absolute left-3 top-3 text-gray-400" />
//               <Input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
//             <Button className="w-full bg-rose-500 hover:bg-rose-600" onClick={handleSignIn}>
//               Sign In
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
