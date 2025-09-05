import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      githubUrl="https://github.com/bentsignal/hmmm"
    >
      {children}
    </DocsLayout>
  );
}
