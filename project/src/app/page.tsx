import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            StudySync
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            AI-Powered Study & Collaboration Platform for Students
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Organize your study schedules, collaborate with peers, and receive intelligent learning suggestions. 
            Stay productive with structured study routines powered by AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/register"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="/login"
              className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-3 px-8 rounded-lg border border-primary-600 transition-colors"
            >
              Sign In
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Smart Study Sessions
              </h3>
              <p className="text-gray-600">
                Create structured study sessions with AI-generated plans tailored to your learning style and schedule.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Peer Collaboration
              </h3>
              <p className="text-gray-600">
                Follow classmates, share study progress, and stay motivated through community engagement.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Progress Tracking
              </h3>
              <p className="text-gray-600">
                Monitor your study hours, task completion, and learning progress with detailed analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
