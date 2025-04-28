'use client';

// import { useState } from "react";

export default function HomePage() {
  // const [pending, startTransition] = useTransition();
  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxClick = () => {
  //     setIsChecked(!isChecked);
  // };

  // const {
  //     register,
  //     handleSubmit,
  //     formState: { errors, isSubmitting },
  //     reset,
  // } = useForm<FormData>({
  //     resolver: zodResolver(formSchema),
  // });

  // const onSubmit: SubmitHandler<UpdateProfileInput> = async (input) => {
  //     startTransition(async () => {
  //         const { data, error } = await create(id, input);
  //         if (error) {
  //             toast.error(error, {
  //                 position: "top-right",
  //                 style: {
  //                     fontSize: "11pt",
  //                 },
  //             });
  //         } else if (data) {
  //             toast.success("Profile updated successfully", {
  //                 position: "top-right",
  //                 style: {
  //                     fontSize: "11pt",
  //                 },
  //             });
  //             reset();
  //         }
  //     });
  // };

  return (
    <>
      <div className="container pt-10">
        <div className="flex justify-center">
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="pb-5"
          >
            <div className="grid grid-cols-1 text-center">
              <h3 className="mb-4 text-2xl leading-normal font-semibold">
                Hook Form
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
              <div className="lg:col-span-12">
                <label htmlFor="email" className="font-semibold">
                  Firstname
                </label>
                <input
                  // {...register("first_name")}
                  // className={`  mt-2 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border focus:ring-0 ${errors.first_name &&
                  //     "border-1 border-red-500 "
                  //     }`}
                  placeholder="firstname"
                  className={`mt-2 h-10 w-full rounded border bg-transparent px-3 py-2 outline-none focus:ring-0`}
                />
                {/* {errors.first_name && (
                        <p className="text-red-500">{`${errors.first_name.message}`}</p>
                    )} */}
              </div>
              <div className="lg:col-span-12">
                <label htmlFor="email" className="font-semibold">
                  Lastname
                </label>
                <input
                  // {...register("last_name")}
                  // className={`  mt-2 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border focus:ring-0 ${errors.last_name &&
                  //     "border-1 border-red-500 "
                  //     }`}
                  className={`mt-2 h-10 w-full rounded border bg-transparent px-3 py-2 outline-none focus:ring-0`}
                  placeholder="lastname"
                />
                {/* {errors.last_name && (
                        <p className="text-red-500">{`${errors.last_name.message}`}</p>
                    )} */}
              </div>
            </div>
            <div className="lg:col-span-12">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                // {...register("email")}
                // className={`  mt-2 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border focus:ring-0 ${errors.email && "border-1 border-red-500 "
                //     }`}
                className={`mt-2 h-10 w-full rounded border bg-transparent px-3 py-2 outline-none focus:ring-0`}
                placeholder="dymongthai@gmail.com"
              />
              {/* {errors.email && (
                            <p className="text-red-500">{`${errors.email.message}`}</p>
                        )} */}
            </div>

            <div className="lg:col-span-12">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                // type={isChecked ? "" : "password"}
                // {...register("password")}
                // className={`  mt-2 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border focus:ring-0 ${errors.password && "border-1 border-red-500 "
                //     }`}
                className={`mt-2 h-10 w-full rounded border bg-transparent px-3 py-2 outline-none focus:ring-0`}
                placeholder="password"
              />
              {/* {errors.password && (
                            <p className="text-red-500 ">{`${errors.password.message}`}</p>
                        )} */}
            </div>
            <div className="lg:col-span-12">
              <label htmlFor="ComfirmPassword" className="font-semibold">
                Comfirm Password
              </label>
              <input
                // type={isChecked ? "" : "password"}
                // {...register("confirmPassword")}
                // className={`  mt-2 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border focus:ring-0 ${errors.confirmPassword && "border-1 border-red-500 "
                //     }`}
                className={`mt-2 h-10 w-full rounded border bg-transparent px-3 py-2 outline-none focus:ring-0`}
                placeholder="confirm password"
              />
              {/* {errors.confirmPassword && (
                            <p className="text-red-500 ">{`${errors.confirmPassword.message}`}</p>
                        )} */}
            </div>
            <div className="mt-3 w-full">
              {/* <Checkbox id="terms" onClick={handleCheckboxClick} /> */}
              <label htmlFor="terms" className="ml-2 text-base">
                Show Password
              </label>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                // disabled={pending}
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-sky-700 px-6 font-medium tracking-wide text-white"
              >
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
