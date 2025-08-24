"use client";

import CopyLink from '@/components/molecules/CopyLink';

export default function CopyLinkExample() {
  const exampleUrl = 'https://example.com/share/abc123';
  const referralCode = 'REF123456';

  const handleCopySuccess = (text: string) => {
    console.log('Successfully copied:', text);
    // You can add analytics tracking here
  };

  return (
    <div className="p-6 space-y-6 bg-[#111923] rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">CopyLink Component Examples</h2>
      
      {/* Button Variant Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Button Variants</h3>
        
        <div className="flex flex-wrap gap-4">
          <CopyLink 
            text={exampleUrl}
            variant="button"
            size="sm"
            onCopy={handleCopySuccess}
          />
          
          <CopyLink 
            text={exampleUrl}
            variant="button"
            size="md"
            onCopy={handleCopySuccess}
          />
          
          <CopyLink 
            text={exampleUrl}
            variant="button"
            size="lg"
            onCopy={handleCopySuccess}
          />
        </div>
      </div>

      {/* Icon Variant Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Icon Variants</h3>
        
        <div className="flex flex-wrap gap-4">
          <CopyLink 
            text={exampleUrl}
            variant="icon"
            size="sm"
            onCopy={handleCopySuccess}
          />
          
          <CopyLink 
            text={exampleUrl}
            variant="icon"
            size="md"
            onCopy={handleCopySuccess}
          />
          
          <CopyLink 
            text={exampleUrl}
            variant="icon"
            size="lg"
            onCopy={handleCopySuccess}
          />
        </div>
      </div>

      {/* Text Variant Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Text Variants</h3>
        
        <div className="flex flex-wrap gap-4">
          <CopyLink 
            text={referralCode}
            variant="text"
            size="sm"
            onCopy={handleCopySuccess}
          >
            Copy Referral Code
          </CopyLink>
          
          <CopyLink 
            text={exampleUrl}
            variant="text"
            size="md"
            onCopy={handleCopySuccess}
          >
            Copy Share Link
          </CopyLink>
        </div>
      </div>

      {/* Custom Styling Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Custom Styling</h3>
        
        <div className="flex flex-wrap gap-4">
          <CopyLink 
            text={exampleUrl}
            variant="button"
            className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
            onCopy={handleCopySuccess}
          >
            Copy URL
          </CopyLink>
          
          <CopyLink 
            text={referralCode}
            variant="icon"
            className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border-purple-500/30"
            onCopy={handleCopySuccess}
          />
        </div>
      </div>

      {/* Without Success Message */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Without Success Message</h3>
        
        <div className="flex flex-wrap gap-4">
          <CopyLink 
            text={exampleUrl}
            variant="button"
            showSuccessMessage={false}
            onCopy={handleCopySuccess}
          >
            Copy (No Tooltip)
          </CopyLink>
        </div>
      </div>

      {/* Custom Success Message */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Custom Success Message</h3>
        
        <div className="flex flex-wrap gap-4">
          <CopyLink 
            text={referralCode}
            variant="button"
            successMessage="Referral code copied!"
            successDuration={3000}
            onCopy={handleCopySuccess}
          >
            Copy Referral
          </CopyLink>
        </div>
      </div>
    </div>
  );
}
