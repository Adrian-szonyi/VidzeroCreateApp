import React from 'react';
import { Camera, Users, Award, Download, Edit, Video, Image, MessageSquare, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Camera />,
      title: 'Campaign Creation',
      description: 'Create customized marketing campaigns and specify exactly what content you need from supporters.'
    },
    {
      icon: <Shield />,
      title: 'User Permissions',
      description: 'Easily gather user consent and permissions to publish their content across your marketing channels.'
    },
    {
      icon: <Users />,
      title: 'Supporter Network',
      description: 'Build and engage with a dedicated network of content creators who support your cause.'
    },
    {
      icon: <MessageSquare />,
      title: 'Feedback & Testimonials',
      description: 'Collect authentic testimonials and feedback directly from your community.'
    },
    {
      icon: <Image />,
      title: 'Photo Collections',
      description: 'Gather high-quality images for creative collages and social media content.'
    },
    {
      icon: <Video />,
      title: 'Video Content',
      description: 'Source compelling video stories from around the world to showcase your impact.'
    },
    {
      icon: <Award />,
      title: 'Gamification',
      description: 'Reward contributors through points, badges, and recognition to encourage participation.'
    },
    {
      icon: <Download />,
      title: 'Asset Management',
      description: 'Easily approve, organize, and download all content for your campaigns.'
    },
    {
      icon: <Edit />,
      title: 'Professional Editing',
      description: 'Send content directly to Vidzero for professional editing and enhancement.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Content Creation
          </h2>
          <p className="text-xl text-gray-600">
            Our platform provides everything charities need to source, manage, and utilize authentic user-generated content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;