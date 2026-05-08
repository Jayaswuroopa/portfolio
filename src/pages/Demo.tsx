import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { GradientBlob } from "@/components/GradientBlob";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldAlert, FileText, Package, CheckCircle2, Upload, Search, BarChart3, TrendingUp, AlertTriangle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ThreatDetectorDemo = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <ShieldAlert className="text-red-500" /> Live Feed Analysis
      </h2>
      <div className="flex gap-2">
        <span className="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-xs font-bold border border-red-500/30 animate-pulse">
          Active Monitoring
        </span>
      </div>
    </div>
    
    <div className="relative aspect-video bg-black/40 rounded-lg overflow-hidden border border-primary/20">
      <img 
        src="https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&h=500&fit=crop" 
        alt="Camera Feed" 
        className="w-full h-full object-cover opacity-60"
      />
      {/* Bounding Box Mock */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
        className="absolute top-[30%] left-[40%] w-[20%] h-[40%] border-2 border-red-500 bg-red-500/10 rounded"
      >
        <div className="absolute -top-6 left-0 bg-red-500 text-white text-[10px] px-1 whitespace-nowrap font-bold">
          SUSPICIOUS (94%)
        </div>
      </motion.div>
    </div>
    
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 bg-background/50 border-primary/10 text-center">
        <div className="text-3xl font-bold text-primary">12</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">Feeds Connected</div>
      </Card>
      <Card className="p-4 bg-red-500/10 border-red-500/20 text-center">
        <div className="text-3xl font-bold text-red-500">3</div>
        <div className="text-xs text-red-500/70 uppercase tracking-wider">Alerts Today</div>
      </Card>
      <Card className="p-4 bg-background/50 border-primary/10 text-center">
        <div className="text-3xl font-bold text-primary">99.8%</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">Uptime</div>
      </Card>
    </div>
  </div>
);

const ResumeAnalyzerDemo = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FileText className="text-blue-500" /> ATS Analyzer
      </h2>
      <Button variant="outline" size="sm"><Upload className="w-4 h-4 mr-2" /> Upload Resume</Button>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6 bg-background/50 border-primary/20 flex flex-col items-center justify-center space-y-4">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-muted/20" />
            <motion.circle 
              initial={{ strokeDasharray: "0 1000" }}
              animate={{ strokeDasharray: "310 1000" }} 
              transition={{ duration: 1.5, ease: "easeOut" }}
              cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-blue-500" 
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-gradient">87%</span>
            <span className="text-xs text-muted-foreground">Match</span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg">Senior Frontend Developer</h3>
          <p className="text-sm text-muted-foreground">Candidate: Alex Johnson</p>
        </div>
      </Card>
      
      <div className="space-y-4">
        <h3 className="font-semibold px-1">Extracted Skills</h3>
        <div className="flex flex-wrap gap-2">
          {['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'GraphQL', 'AWS', 'Docker'].map((skill, i) => (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={skill} 
              className="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20 flex items-center gap-1"
            >
              <CheckCircle2 className="w-3 h-3" /> {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const InventorySystemDemo = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Package className="text-emerald-500" /> Stock Management
      </h2>
      <Button className="bg-emerald-500 hover:bg-emerald-600 text-white size-sm">Add Product</Button>
    </div>

    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="p-4 rounded-lg bg-background/50 border border-border flex items-center gap-4">
        <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-500"><BoxIcon /></div>
        <div>
          <div className="text-2xl font-bold">1,248</div>
          <div className="text-xs text-muted-foreground">Total Products</div>
        </div>
      </div>
      <div className="p-4 rounded-lg bg-background/50 border border-border flex items-center gap-4">
        <div className="p-3 bg-amber-500/20 rounded-lg text-amber-500"><TrendingUp /></div>
        <div>
          <div className="text-2xl font-bold">342</div>
          <div className="text-xs text-muted-foreground">Orders Today</div>
        </div>
      </div>
      <div className="p-4 rounded-lg bg-background/50 border border-border flex items-center gap-4">
        <div className="p-3 bg-red-500/20 rounded-lg text-red-500"><AlertTriangle /></div>
        <div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-muted-foreground">Low Stock Alerts</div>
        </div>
      </div>
    </div>

    <div className="border border-border rounded-lg overflow-hidden bg-background/50">
      <table className="w-full text-sm text-left">
        <thead className="bg-muted/50 text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-medium">SKU</th>
            <th className="px-4 py-3 font-medium">Product Name</th>
            <th className="px-4 py-3 font-medium">Category</th>
            <th className="px-4 py-3 font-medium text-right">Stock</th>
            <th className="px-4 py-3 font-medium text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            { sku: "PR-001", name: "Cybernetic Neural Processor", cat: "Hardware", stock: 45, status: "In Stock", color: "text-emerald-500" },
            { sku: "PR-002", name: "Quantum Matrix Display", cat: "Monitors", stock: 12, status: "Low Stock", color: "text-amber-500" },
            { sku: "PR-003", name: "Holographic Emitter Unit", cat: "Accessories", stock: 0, status: "Out of Stock", color: "text-red-500" },
            { sku: "PR-004", name: "Tachyon Memory Module", cat: "Components", stock: 128, status: "In Stock", color: "text-emerald-500" },
          ].map((item, i) => (
            <motion.tr 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item.sku} 
              className="hover:bg-muted/20 transition-colors"
            >
              <td className="px-4 py-3 font-mono text-muted-foreground">{item.sku}</td>
              <td className="px-4 py-3 font-medium">{item.name}</td>
              <td className="px-4 py-3 text-muted-foreground">{item.cat}</td>
              <td className="px-4 py-3 text-right">{item.stock}</td>
              <td className="px-4 py-3 text-center">
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold bg-background border ${item.color.replace('text-', 'border-').replace('500', '500/30')} ${item.color}`}>
                  {item.status}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const BoxIcon = () => <Package className="w-6 h-6" />;

const Demo = () => {
  const { projectId } = useParams();

  const renderDemoContent = () => {
    switch (projectId) {
      case 'threat-detector':
        return <ThreatDetectorDemo />;
      case 'resume-analyzer':
        return <ResumeAnalyzerDemo />;
      case 'inventory-system':
        return <InventorySystemDemo />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Please select a specific project</h2>
            <Link to="/projects" className="text-primary hover:underline">Return to Projects</Link>
          </div>
        );
    }
  };

  return (
    <PageTransition>
      <ParticlesBackground />
      <GradientBlob color="primary" size="lg" position={{ top: "-10%", right: "-10%" }} />
      
      <div className="min-h-screen pt-24 pb-12 container mx-auto px-4 z-10 relative">
        <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="p-8 backdrop-blur-xl bg-card/80 border-primary/20 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            {renderDemoContent()}
          </Card>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Demo;
