"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import style from "./banner.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { BannerPlaceholder } from "./Placeholder";
import { bannerList } from "@/common/data";
import Image from 'next/image'

export type BannerProps = {
  bannerList: any;
};

export function Banner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div className="mx-auto border-0">
        {bannerList ? (
          <div className="w-full mx-auto">
            <div className={` ${style.sliderWrapper}`}>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                style={{ paddingBottom: "50px" }}
              >
                <AnimatePresence mode="wait">
                  {bannerList?.data?.map((item: any) => {
                    return (
                      <SwiperSlide key={item?.id} className="cursor-pointer">
                        <Link href={item?.link}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Card className="w-full p-0">
                              <Image
                                src={item?.image}
                                width={500}
                                height={500}
                                className="h-full w-full object-contain"
                                alt="Picture of the author"
                              />
                            </Card>
                          </motion.div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </AnimatePresence>
              </Swiper>
            </div>
          </div>
        ) : (
          <>
              <BannerPlaceholder />
          </>
        )}
      </div>
    </div>
  );
}
