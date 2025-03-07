import { motion} from "framer-motion";
import { ArrowRight } from "lucide-react";
import CardItem from "./CardItem";
import  { useState } from "react";

import {
  Award,
  TrendingUp,
  LifeBuoy,
  Workflow,
  ShieldCheck,
  Wrench,
 
} from "lucide-react";



const usps = [
  {
    title: "Industry Pioneers",
    description: "First Pharma-Specialized EPC in North India",
    icon: Award,
  },
  {
    title: "Value-Driven Approach",
    description: "Optimal solutions at the right price point",
    icon: TrendingUp,
  },
  {
    title: "End-to-End Support",
    description: "Comprehensive project and financial assistance",
    icon: LifeBuoy,
  },
  {
    title: "Seamless Execution",
    description: "Efficient turnkey project implementation",
    icon: Workflow,
  },
  {
    title: "Regulatory Expertise",
    description: "Ensuring compliance at every step",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Reliability",
    description: "Ongoing maintenance and support services",
    icon: Wrench,
  },
];

 const itemVariant = {
   hidden: { opacity: 0, y: 20 },
   visible: {
     opacity: 1,
     y: 0,
     transition: { duration: 0.5, ease: "easeOut" },
   },
 };



function App() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const names = ["Road Construction", "Bridge Construction", "Tunnel Boring"];

  return (
    <div className="p-6">
      <div className="grid md:grid-cols-3 gap-8">
        {usps.map((usp, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
          >
            <motion.div
              className="p-4 rounded-2xl bg-[#89bb25]/10 group-hover:bg-[#89bb25]/20 mb-6 transition-all duration-300 w-16 h-16 flex items-center justify-center"
              animate={{
                rotate: hoveredCard === index ? 360 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <usp.icon className="w-7 h-7 text-[#89bb25]" />
            </motion.div>
            <h4 className="text-xl font-semibold text-[#00498b] mb-3 group-hover:text-[#89bb25] transition-colors duration-300">
              {usp.title}
            </h4>
            <p className="text-gray-600">{usp.description}</p>

            <motion.div
              className="mt-6 flex items-center text-[#89bb25] font-medium"
              initial={{ opacity: 0 }}
              animate={{
                opacity: hoveredCard === index ? 1 : 0,
                x: hoveredCard === index ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
            >
              <span>Learn more</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </motion.div>
        ))}
      </div>
      {names.map((name, index) => (
        <CardItem key={index} name={name} />
      ))}
    </div>
  );
}

export default App;
