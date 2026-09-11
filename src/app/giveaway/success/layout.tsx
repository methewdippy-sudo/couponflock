import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reward Successfully Verified | CouponFlock",
  description: "Voucher verification successful. Copy your redemption code and download your digital voucher receipt.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
