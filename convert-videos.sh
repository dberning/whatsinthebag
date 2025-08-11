#!/bin/bash

# Video conversion script for better browser compatibility
# Converts MOV files to MP4 format

echo "🎬 Converting MOV videos to MP4 for browser compatibility..."

# Create output directory
mkdir -p converted_videos

# Download and convert a sample video
echo "📥 Downloading sample video..."
curl -o "converted_videos/7-30-25.MOV" "https://wjfvlpcyvmnhnoxeyflj.supabase.co/storage/v1/object/public/videos//7-30-25.MOV"

echo "🔄 Converting to MP4..."
ffmpeg -i "converted_videos/7-30-25.MOV" \
       -c:v libx264 \
       -c:a aac \
       -preset medium \
       -crf 23 \
       "converted_videos/7-30-25.mp4" \
       -y

echo "✅ Conversion complete!"
echo "📁 Output: converted_videos/7-30-25.mp4"
echo ""
echo "🔧 Next steps:"
echo "1. Upload the MP4 file to your Supabase storage"
echo "2. Update the URL in your data.json"
echo "3. Test the video in your app" 