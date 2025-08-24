"use client";

import { useSidebarPosition } from '@/hooks/useSidebarPosition';

/**
 * Example component showing how to use useSidebarPosition hook
 * for floating components that should follow the sidebar edge
 */
export default function FloatingComponentExample() {
  const { leftPosition, isCollapsed, getPosition } = useSidebarPosition();

  return (
    <div className="p-6 space-y-4 bg-[#111923] rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Floating Component Examples</h2>
      
      {/* Example 1: Basic usage */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Basic Floating Component</h3>
        <div 
          className="fixed bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-white text-sm"
          style={{ 
            left: leftPosition,
            top: '100px',
            zIndex: 100
          }}
        >
          <p>Sidebar is {isCollapsed ? 'collapsed' : 'expanded'}</p>
          <p>Left position: {leftPosition}</p>
        </div>
      </div>

      {/* Example 2: Custom positioning */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Custom Position Values</h3>
        <div 
          className="fixed bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-white text-sm"
          style={{ 
            left: getPosition('60px', '280px'),
            top: '200px',
            zIndex: 100
          }}
        >
          <p>Custom collapsed: 60px, expanded: 280px</p>
          <p>Current position: {getPosition('60px', '280px')}</p>
        </div>
      </div>

      {/* Example 3: Responsive floating menu */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Responsive Floating Menu</h3>
        <div 
          className="fixed bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 text-white text-sm transition-all duration-300"
          style={{ 
            left: leftPosition,
            top: '300px',
            zIndex: 100,
            transform: isCollapsed ? 'scale(0.9)' : 'scale(1)'
          }}
        >
          <p>Responsive menu</p>
          <p>Scales down when sidebar is collapsed</p>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Usage Instructions:</h4>
        <div className="space-y-2 text-sm text-[#A7B5CA]">
          <p><strong>Basic usage:</strong> Use <code>leftPosition</code> for standard positioning</p>
          <p><strong>Custom values:</strong> Use <code>getPosition(collapsedValue, expandedValue)</code> for custom positioning</p>
          <p><strong>Responsive behavior:</strong> Use <code>isCollapsed</code> for conditional styling</p>
          <p><strong>Transition:</strong> Add <code>transition-all duration-300</code> for smooth animations</p>
        </div>
      </div>
    </div>
  );
}
