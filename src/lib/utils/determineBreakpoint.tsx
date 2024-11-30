export default function determineBreakpoint(width: number): string {
    if(width < 481) return "mobile";
    if(width > 768) return "desktop";
    return "tablet";
}