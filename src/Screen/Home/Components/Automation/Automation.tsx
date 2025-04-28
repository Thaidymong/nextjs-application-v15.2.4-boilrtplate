"use client";

import React from "react";
import AutomationSwiper from ".";

export default function Automation() {
    return (
        <div id="automation-services">
            <div>
                <div
                    className="bg-[#3D5A73] bg-opacity-90 flex items-center"
                    style={{
                        background: `url(${"/bg-dark.png"}) no-repeat`,
                        height: "339px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="container mt-10">
                        <AutomationSwiper />
                    </div>
                </div>
            </div>
        </div>
    );
}
