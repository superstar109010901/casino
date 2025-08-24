# CopyLink Components

A collection of reusable copy-to-clipboard components with visual feedback and multiple variants.

## Components

### 1. CopyLink (Basic)
A simple copy-to-clipboard component with three variants: button, icon, and text.

### 2. CopyLinkAdvanced (Advanced)
An enhanced version with additional features like external links, loading states, and error handling.

### 3. useCopyToClipboard Hook
A custom hook for copy-to-clipboard functionality that can be used independently.

## Basic Usage

### CopyLink Component

```tsx
import CopyLink from '@/components/molecules/CopyLink';

// Basic button variant
<CopyLink text="https://example.com" />

// Icon variant
<CopyLink text="https://example.com" variant="icon" />

// Text variant with custom content
<CopyLink text="REF123456" variant="text">
  Copy Referral Code
</CopyLink>
```

### CopyLinkAdvanced Component

```tsx
import CopyLinkAdvanced from '@/components/molecules/CopyLinkAdvanced';

// With external link
<CopyLinkAdvanced 
  text="https://example.com"
  variant="link"
  showExternalLink={true}
  externalLinkUrl="https://example.com"
/>

// With loading state
<CopyLinkAdvanced 
  text="https://example.com"
  loading={true}
/>

// With error handling
<CopyLinkAdvanced 
  text="https://example.com"
  onError={(error) => console.error('Copy failed:', error)}
/>
```

### useCopyToClipboard Hook

```tsx
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

function MyComponent() {
  const { copied, copy, reset } = useCopyToClipboard({
    onCopy: (text) => console.log('Copied:', text),
    onError: (error) => console.error('Copy failed:', error),
    successDuration: 2000
  });

  const handleCopy = async () => {
    const success = await copy('https://example.com');
    if (success) {
      console.log('Copy successful!');
    }
  };

  return (
    <button onClick={handleCopy}>
      {copied ? 'Copied!' : 'Copy Link'}
    </button>
  );
}
```

## Props

### CopyLink Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | The text to copy to clipboard |
| `variant` | `'button' \| 'icon' \| 'text'` | `'button'` | The visual variant of the component |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the component |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Custom content to display |
| `onCopy` | `(text: string) => void` | - | Callback when copy is successful |
| `showSuccessMessage` | `boolean` | `true` | Whether to show success tooltip |
| `successMessage` | `string` | `'Copied!'` | Custom success message |
| `successDuration` | `number` | `2000` | Duration to show success state (ms) |

### CopyLinkAdvanced Props

All props from CopyLink plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onError` | `(error: Error) => void` | - | Callback when copy fails |
| `showExternalLink` | `boolean` | `false` | Whether to show external link button |
| `externalLinkUrl` | `string` | - | URL for external link button |
| `disabled` | `boolean` | `false` | Whether the component is disabled |
| `loading` | `boolean` | `false` | Whether to show loading state |

## Variants

### Button Variant
A full button with background, border, and hover effects.

```tsx
<CopyLink text="https://example.com" variant="button" />
```

### Icon Variant
A circular icon button, perfect for compact spaces.

```tsx
<CopyLink text="https://example.com" variant="icon" />
```

### Text Variant
A text-only button with minimal styling.

```tsx
<CopyLink text="https://example.com" variant="text" />
```

### Link Variant (Advanced only)
A text button with optional external link icon.

```tsx
<CopyLinkAdvanced 
  text="https://example.com" 
  variant="link"
  showExternalLink={true}
  externalLinkUrl="https://example.com"
/>
```

## Sizes

- `sm`: Small size (text-xs, 14px icon)
- `md`: Medium size (text-sm, 16px icon) - Default
- `lg`: Large size (text-base, 20px icon)

## Styling

### Custom Classes
You can override the default styling using the `className` prop:

```tsx
<CopyLink 
  text="https://example.com"
  className="bg-blue-500 hover:bg-blue-600 text-white"
/>
```

### Theme Integration
The components use the app's color scheme:
- Primary colors: `#2283F6` (blue)
- Success colors: `#10B981` (green)
- Background colors: `#111923`, `#0D131C`
- Text colors: `#A7B5CA`, `#EDEDED`

## Features

### Visual Feedback
- Success state with green color and check icon
- Loading state with spinner animation
- Disabled state with reduced opacity
- Hover effects and transitions

### Browser Compatibility
- Modern browsers: Uses `navigator.clipboard` API
- Older browsers: Falls back to `document.execCommand`
- Non-secure contexts: Uses fallback method

### Error Handling
- Graceful fallback for unsupported browsers
- Error callbacks for custom error handling
- Console logging for debugging

### Accessibility
- Proper ARIA labels and titles
- Keyboard navigation support
- Screen reader friendly

## Examples

### Referral Code Copy
```tsx
<CopyLink 
  text="REF123456"
  variant="button"
  successMessage="Referral code copied!"
  onCopy={(text) => {
    // Track referral code copy
    analytics.track('referral_code_copied', { code: text });
  }}
>
  Copy Referral Code
</CopyLink>
```

### Share Link with External Link
```tsx
<CopyLinkAdvanced 
  text="https://example.com/share/abc123"
  variant="link"
  showExternalLink={true}
  externalLinkUrl="https://example.com/share/abc123"
  onCopy={(text) => {
    // Track share link copy
    analytics.track('share_link_copied', { url: text });
  }}
>
  Copy Share Link
</CopyLinkAdvanced>
```

### Compact Icon Copy
```tsx
<CopyLink 
  text="https://example.com"
  variant="icon"
  size="sm"
  showSuccessMessage={false}
/>
```

## Best Practices

1. **Always provide meaningful text**: Use descriptive content for better UX
2. **Handle errors gracefully**: Use `onError` callback for error tracking
3. **Track usage**: Use `onCopy` callback for analytics
4. **Consider accessibility**: Ensure proper labels and keyboard support
5. **Test across browsers**: Verify compatibility with target browsers

## Troubleshooting

### Copy not working
- Check if the site is served over HTTPS (required for clipboard API)
- Verify browser support for clipboard functionality
- Check console for error messages

### Styling issues
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Verify theme colors are available

### Performance
- The components are optimized for performance
- Loading states prevent multiple simultaneous copy operations
- Success states auto-reset after specified duration
